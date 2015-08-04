'use strict';

var matrix = require( 'dstructs-matrix' ),
	mean = require( './../lib' );

var k,
	mat,
	out,
	tmp,
	i;

// ----
// Plain arrays...
k = new Array( 10 );
for ( i = 0; i < k.length; i++ ) {
	k[ i ] = i + 1;
}
out = mean( k );
console.log( 'Arrays: %s\n', out );


// ----
// Object arrays (accessors)...
function getValue( d ) {
	return d.x;
}
for ( i = 0; i < k.length; i++ ) {
	k[ i ] = {
		'x': k[ i ]
	};
}
out = mean( k, {
	'accessor': getValue
});
console.log( 'Accessors: %s\n', out );


// ----
// Deep set arrays...
for ( i = 0; i < k.length; i++ ) {
	k[ i ] = {
		'x': [ i, k[ i ].x ]
	};
}
out = mean( k, {
	'path': 'x/1',
	'sep': '/'
});
console.log( 'Deepset:');
console.dir( out );
console.log( '\n' );


// ----
// Typed arrays...
k = new Int32Array( 10 );
for ( i = 0; i < k.length; i++ ) {
	k[ i ] = i + 1;
}
tmp = mean( k );
out = '';
for ( i = 0; i < k.length; i++ ) {
	out += tmp[ i ];
	if ( i < k.length-1 ) {
		out += ',';
	}
}
console.log( 'Typed arrays: %s\n', out );


// ----
// Matrices...
mat = matrix( k, [5,2], 'int32' );
out = mean( mat );
console.log( 'Matrix: %s\n', out.toString() );


// ----
// Matrices (custom output data type)...
out = mean( mat, {
	'dtype': 'uint8'
});
console.log( 'Matrix (%s): %s\n', out.dtype, out.toString() );
