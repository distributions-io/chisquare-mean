'use strict';

// MODULES //

var isPositive = require( 'validate.io-positive-primitive' );


// MEAN //

/**
* FUNCTION mean( k )
*	Computes the distribution mean for a Chi-squared with parameter k.
*
* @param {Number} k - degrees of freedom
* @returns {Number} distribution mean
*/
function mean( k ) {
	if ( !isPositive( k ) ) {
		return NaN;
	}
	return k;
} // end FUNCTION mean()


// EXPORTS

module.exports =  mean;
