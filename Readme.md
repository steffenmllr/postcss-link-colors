# [postcss][postcss]-link-colors [![Build Status](https://travis-ci.org/steffenmllr/postcss-link-colors.svg?branch=master)][ci] [![NPM version](https://badge.fury.io/js/postcss-link-colors.svg)][npm]

> Helper function for link states

## Install

With [npm](https://npmjs.org/package/postcss-link-colors) do:

```
npm install postcss-link-colors --save
```

## Example

```js
var postcss = require('postcss');

var css = 'a{ linkColors: red, blue, green, yellow, purple; }';
console.log(postcss([ require('postcss-link-colors') ]).process(css).css);

// => 'a{ color: red; } a:focus{ color:  purple; } a:active{ color:  yellow; } a:visited{ color:  green; } a:hover{ color:  blue; }'
```

You can also pass the classes in via `opts.classes`. See the tests for an example.

## Similar projects
* [jedmao/postcss-all-link-colors](https://github.com/jedmao/postcss-all-link-colors)

## Contributing

Pull requests are welcome. If you send a PR or want to maintain the module,
I'll grant you repo access and publishing rights for npm.

## License

MIT © [Steffen Müller](http://steffen.io)

[ci]:      https://travis-ci.org/steffenmllr/postcss-link-colors
[npm]:     http://badge.fury.io/js/postcss-link-colors
[postcss]: https://github.com/steffenmllr/postcss-link-colors