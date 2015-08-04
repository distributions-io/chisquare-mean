/* global describe, it, require */
'use strict';

// MODULES //

var // Expectation library:
	chai = require( 'chai' ),

	// Validate a value is NaN:
	isnan = require( 'validate.io-nan' ),

	// Module to be tested:
	mean = require( './../lib/number.js' );


// VARIABLES //

var expect = chai.expect,
	assert = chai.assert;


// TESTS //

describe( 'number mean', function tests() {

	it( 'should export a function', function test() {
		expect( mean ).to.be.a( 'function' );
	});

	it( 'should compute the distribution mean', function test() {
		assert.strictEqual( mean( 2 ), 2 );
		assert.strictEqual( mean( 4  ), 4 );
		assert.strictEqual( mean( 8  ), 8 );
		assert.strictEqual( mean( 16  ), 16 );
	});

	it( 'should return `NaN` for invalid values of parameter k', function test() {
		assert.isTrue( isnan( mean( -1 ) ) );
	});

});
