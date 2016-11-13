'use strict';

const assert = require('assert');
const fn = require('../');
const queries = require('./fixtures/queries.json');
const looseQueries = require('./fixtures/loose-queries.json');

describe('Validate list of media queries, {strict: true}', function () {
	queries.forEach(( query ) => {
		it(`${query}`, function () {
			assert.equal(fn().test(query), true);
		});
	});
});

describe('Validate list of media queries, {strict: false}', function () {
	[].concat(queries, looseQueries).forEach(( query ) => {
		it(`${query}`, function () {
			assert.equal(fn({ strict: false }).test(query), true);
		});
	});
});
