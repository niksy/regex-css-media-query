# regex-css-media-query

[![Build Status][ci-img]][ci]

Regular expression for CSS media query.

## Install

```sh
npm install regex-css-media-query --save
```

## Usage

```js
const reCssMediaQuery = require('regex-css-media-query');

console.log(reCssMediaQuery().test('screen and (min-width: 500px) and (max-width: 800px)'));
// true

console.log(reCssMediaQuery({ strict: false }).test('all and (elvis: chase) and (sasha: tucker)'));
// true
```

## API

### reCssMediaQuery(opts)

Returns: `RegExp`

Returns regular expression for checking if given query is valid CSS media query.

#### opts

Type: `Object`

#### strict

Type: `Boolean`  
Default: `true`

If true, regular expression will use valid standard values when evaluation expression:

* [media types][media-types]
* [media features and corresponding discrete values][media-features]
* [length][css-length-units] and [resolution][css-resolution-units] units for number values

## Acknowledgments

* [Initial CSS media query regular expression](https://github.com/weblinc/media-match/blob/master/media.match.js#L25)

## License

MIT © [Ivan Nikolić](http://ivannikolic.com)

[ci]: https://travis-ci.org/niksy/regex-css-media-query
[ci-img]: https://img.shields.io/travis/niksy/regex-css-media-query.svg
[media-types]: https://www.w3.org/TR/mediaqueries-4/#media-types
[media-features]: https://www.w3.org/TR/mediaqueries-4/#mf-dimensions
[css-length-units]: https://www.w3.org/TR/css3-values/#length-value
[css-resolution-units]: https://www.w3.org/TR/css3-values/#resolution-value
