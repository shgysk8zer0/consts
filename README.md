# @shgysk8zer0/consts

A collection of constants for files, HTTP, dates, etc.

This is nothing special. It's just a bunch of commonly used and useful constants.
Why? Because I kept defining constants in different projects for the same things,
so decided to just do it once and avoid repeating myself.

[![CodeQL](https://github.com/shgysk8zer0/node-http/actions/workflows/codeql-analysis.yml/badge.svg)](https://github.com/shgysk8zer0/consts/actions/workflows/codeql-analysis.yml)
![Node CI](https://github.com/shgysk8zer0/node-http/workflows/Node%20CI/badge.svg)
![Lint Code Base](https://github.com/shgysk8zer0/node-http/workflows/Lint%20Code%20Base/badge.svg)

[![GitHub license](https://img.shields.io/github/license/shgysk8zer0/node-http.svg)](https://github.com/shgysk8zer0/node-http/blob/master/LICENSE)
[![GitHub last commit](https://img.shields.io/github/last-commit/shgysk8zer0/node-http.svg)](https://github.com/shgysk8zer0/node-http/commits/master)
[![GitHub release](https://img.shields.io/github/release/shgysk8zer0/node-http?logo=github)](https://github.com/shgysk8zer0/node-http/releases)
[![GitHub Sponsors](https://img.shields.io/github/sponsors/shgysk8zer0?logo=github)](https://github.com/sponsors/shgysk8zer0)

[![npm](https://img.shields.io/npm/v/@shgysk8zer0/consts)](https://www.npmjs.com/package/@shgysk8zer0/consts)
![node-current](https://img.shields.io/node/v/@shgysk8zer0/consts)
![npm bundle size gzipped](https://img.shields.io/bundlephobia/minzip/@shgysk8zer0/consts)
[![npm](https://img.shields.io/npm/dw/@shgysk8zer0/consts?logo=npm)](https://www.npmjs.com/package/@shgysk8zer0/consts)

[![GitHub followers](https://img.shields.io/github/followers/shgysk8zer0.svg?style=social)](https://github.com/shgysk8zer0)
![GitHub forks](https://img.shields.io/github/forks/shgysk8zer0/node-http.svg?style=social)
![GitHub stars](https://img.shields.io/github/stars/shgysk8zer0/node-http.svg?style=social)
[![Twitter Follow](https://img.shields.io/twitter/follow/shgysk8zer0.svg?style=social)](https://twitter.com/shgysk8zer0)

[![Donate using Liberapay](https://img.shields.io/liberapay/receives/shgysk8zer0.svg?logo=liberapay)](https://liberapay.com/shgysk8zer0/donate "Donate using Liberapay")
- - -

- [Code of Conduct](./.github/CODE_OF_CONDUCT.md)
- [Contributing](./.github/CONTRIBUTING.md)
<!-- - [Security Policy](./.github/SECURITY.md) -->

## Installation

```bash
npm i @shgysk8zer0/consts
```

## Usage
```js
import * as  HTTP_STATUS from '@shgysk8zer0/consts/status.js';
import * as TYPES from '@shgysk8zer0/consts/types.js';
import * as EXTS from '@shgysk8zer0/consts/exts.js';
import { DAY } from '@shgysk8zer0/consts/date.js';
```

### Tip

You can use `<importmap>` to make use in client-side code easier:

```html
<script type="importmap">
  {
    "imports": {
      "@shgysk8zer0/consts/": "https://unpkg.com/@shgysk8zer0/consts@1.0.0/"
    }
  }
</script>
```

... If you don't want to take that route, you can always update the example code
with full URLs: `https://unpkg.com/@shgysk8zer0/consts/*`.
