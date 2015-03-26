# object-to-arrays

[![NPM version][npm-img]][npm-url]
[![License][license-img]][license-url]
[![Build status][travis-img]][travis-url]

Transform an object into nested arrays.

## Installation

```
npm install object-to-arrays
```

## Usage

``` javascript
var objectToArrays = require('object-to-arrays')

var obj = {
  foo: 'bar',
  baz: 'qux'
}

objectToArrays(obj)
// [
//   ['foo', 'bar'],
//   ['baz', 'qux']
// ]
```

[npm-img]: https://img.shields.io/npm/v/object-to-arrays.svg?style=flat-square
[npm-url]: https://npmjs.org/package/object-to-arrays
[license-img]: http://img.shields.io/npm/l/object-to-arrays.svg?style=flat-square
[license-url]: LICENSE
[travis-img]: https://img.shields.io/travis/gummesson/object-to-arrays.svg?style=flat-square
[travis-url]: https://travis-ci.org/gummesson/object-to-arrays
