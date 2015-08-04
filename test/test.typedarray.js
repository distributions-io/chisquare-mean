/* global describe, it, require */
'use strict';

// MODULES //

var // Expectation library:
	chai = require( 'chai' ),

	// Module to be tested:
	mean = require( './../lib/array.js' );


// VARIABLES //

var expect = chai.expect,
	assert = chai.assert;


// TESTS //

describe( 'typed-array mean', function tests() {

	it( 'should export a function', function test() {
		expect( mean ).to.be.a( 'function' );
	});

	it( 'should compute the distribution mean', function test() {
		var k, actual, expected;

		k = new Float64Array( [ 2, 4, 8, 16  ] );
		actual = new Float64Array( k.length );

		actual = mean( actual, k );
		expected = new Float64Array( [ 2, 4, 8, 16 ] );

		assert.deepEqual( actual, expected );
	});

	it( 'should return an empty array if provided an empty array', function test() {
		assert.deepEqual( mean( new Int8Array(), new Int8Array() ), new Int8Array() );
	});

});
