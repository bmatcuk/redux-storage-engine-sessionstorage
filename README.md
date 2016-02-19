# [redux-storage-engine-sessionstorage][]

[![dependencies](https://david-dm.org/bmatcuk/redux-storage-engine-sessionstorage.svg)](https://david-dm.org/bmatcuk/redux-storage-engine-sessionstorage)
[![devDependencies](https://david-dm.org/bmatcuk/redux-storage-engine-sessionstorage/dev-status.svg)](https://david-dm.org/bmatcuk/redux-storage-engine-sessionstorage#info=devDependencies)

[![license](https://img.shields.io/npm/l/redux-storage-engine-sessionstorage.svg?style=flat-square)](https://www.npmjs.com/package/redux-storage-engine-sessionstorage)
[![npm version](https://img.shields.io/npm/v/redux-storage-engine-sessionstorage.svg?style=flat-square)](https://www.npmjs.com/package/redux-storage-engine-sessionstorage)
[![npm downloads](https://img.shields.io/npm/dm/redux-storage-engine-sessionstorage.svg?style=flat-square)](https://www.npmjs.com/package/redux-storage-engine-sessionstorage)

`window.sessionStorage` based engine for [redux-storage][].

## Installation

    npm install --save redux-storage-engine-sessionstorage

## Usage

Stores everything inside `window.sessionStorage`.

```js
import createEngine from 'redux-storage-engine-sessionstorage';
const engine = createEngine('my-save-key');
```

**Note**: Session Storage is limited to the tab/window in which it has been set.
This means that if a user opens your app in a new tab or window, they'll get a
new session storage. The session storage is only really useful if your app
consists of multiple pages (since all pages on the domain will have access to
it), or if the user navigates away and returns in the same tab/window.

**Warning**: `sessionStorage` does not expose a async API and every save/load
operation will block the JS thread!

**Warning**: Some browsers like IE<=11 does not support Promises! You could
use something like [es6-promise][] to polyfill.

  [redux-storage]: https://github.com/michaelcontento/redux-storage
  [redux-storage-engine-sessionstorage]: https://github.com/bmatcuk/redux-storage-engine-sessionstorage
  [es6-promise]: https://github.com/stefanpenner/es6-promise

