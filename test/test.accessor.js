/* global describe, it, require */
'use strict';

// MODULES //

var // Expectation library:
	chai = require( 'chai' ),

	// Module to be tested:
	mean = require( './../lib/accessor.js' );


// VARIABLES //

var expect = chai.expect,
	assert = chai.assert;


// TESTS //

describe( 'accessor mean', function tests() {

	it( 'should export a function', function test() {
		expect( mean ).to.be.a( 'function' );
	});

	it( 'should compute the distribution mean using an accessor', function test() {
		var k, actual, expected;

		k = [
			{'k':2},
			{'k':4},
			{'k':8},
			{'k':16}
		];
		actual = new Array( k.length );

		actual = mean( actual, k, getValue );
		expected = [ 2, 4, 8, 16 ];

		assert.deepEqual( actual, expected );

		function getValue( d ) {
			return d.k;
		}
	});

	it( 'should return an empty array if provided an empty array', function test() {
		assert.deepEqual( mean( [], [], getValue ), [] );
		function getValue( d ) {
			return d.x;
		}
	});

	it( 'should handle non-numeric values by setting the element to NaN', function test() {
		var k, actual, expected;

		k = [
			{'x':true},
			{'x':null},
			{'x':[]},
			{'x':{}}
		];
		actual = new Array( k.length );
		actual = mean( actual, k, getValue );

		expected = [ NaN, NaN, NaN, NaN ];

		assert.deepEqual( actual, expected );

		function getValue( d ) {
			return d.x;
		}
	});

});
