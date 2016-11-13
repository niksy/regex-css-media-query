'use strict';

const mediaQueryTypes = require('media-query-types');
const cssLengthUnits = require('css-length-units');
const cssResolutionUnits = require('css-resolution-units');
const cssMediaFeatures = require('css-media-features');
const numberRe = '\\d+(\\.\\d+)?';

const strictRe = new RegExp([
	'^(\\s*',
	'(only|not)?\\s*',
	`(${mediaQueryTypes().join('|')})?\\s*`,
	'(and)?\\s*',
	'(\\(\\s*(',
	[
		'-\\w+-(min-|max-)?([\\w\\-]+)\\s*(:?\\s*.+)?',
		`(${cssMediaFeatures({ range: true }).join('|')})\\s*(:?\\s*(${cssMediaFeatures.discreteValues.join('|')}|${numberRe}(${[].concat(cssLengthUnits, cssResolutionUnits).join('|')}|\\/${numberRe})?))?`
	].join('|'),
	')\\s*\\))?',
	'\\s*(,|and)?',
	'\\s*){1,}$'
].join(''));

const looseRe = new RegExp([
	'^(\\s*',
	'(\\w+)?\\s*',
	'(\\w+)?\\s*',
	'(and)?\\s*',
	'(\\(\\s*(',
	[
		'-\\w+-(min-|max-)?([\\w\\-]+)\\s*(:?\\s*.+)?',
		`(min-|max-)?([\\w\\-]+)\\s*(:?\\s*(\\w+|${numberRe}(\\w+|\\/${numberRe})?))?`
	].join('|'),
	')\\s*\\))?',
	'\\s*(,|and)?',
	'\\s*){1,}$'
].join(''));

module.exports = ( opts ) => {

	opts = Object.assign({
		strict: true
	}, opts);

	if ( opts.strict ) {
		return strictRe;
	}
	return looseRe;
};
