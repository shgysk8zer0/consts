import js from '@eslint/js';
import globals from 'globals';

const rules = {
	...js.configs.recommended.rules,
	'indent': [2, 'tab', { 'SwitchCase': 1 }],
	'quotes': [2, 'single'],
	'semi': [2, 'always'],
	'no-console': 0,
	'no-async-promise-executor': 0,
	'no-prototype-builtins': 0,
	'no-unused-vars': 'error',
};

const ignores = [
	'node_modules/',
	'.netlify/',
	'_site/',
	'**/*.min.js',
	'*.min.js',
];

export default [
	{ ignores },
	{
		ignores: [...ignores, 'api/'],
		files: ['*.js', '**/*.js', '*.mjs', '**/*.mjs'],
		rules,
		linterOptions: {
			noInlineConfig: false
		},
		languageOptions: {
			ecmaVersion: 'latest',
			sourceType: 'module',
			globals: {
				globalThis: 'readonly',
				trustedTypes: 'readonly',
				cookieStore: 'readonly',
				scheduler: 'readonly',
				PasswordCredential: 'readonly',
				...globals.browser,
			}
		}
	}, {
		ignores,
		files: ['api/*.cjs','api/*.js', 'api/**/*.cjs', 'api/**/*.js'],
		rules,
		languageOptions: {
			ecmaVersion: 'latest',
			sourceType: 'module',
			globals: globals.node,
		}
	}
];
