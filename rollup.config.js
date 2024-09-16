import { nodeResolve } from '@rollup/plugin-node-resolve';
import { readdir } from 'node:fs/promises';
import { extname } from 'node:path';

const scripts = await readdir('./', { withFileTypes: true, encoding: 'utf8' })
	.then(items => items.filter(item => item.isFile() && extname(item.name) === '.js').map(file => file.name));

export default {
	input: scripts.filter(script => ! script.endsWith('.config.js')),
	external: [],
	output: {
		dir: './cjs/',
		format: 'cjs',
		entryFileNames: '[name].cjs',
		chunkFileNames: '[name]-[hash].cjs',
	},
	plugins: [nodeResolve()],
};
