/*! Build-0.1-20090515: datatypes.core.js datatypes.utils.js */
/*!
 * jQuery Datatypes 0.1 (20090515)
 *
 * Copyright (c) 2009 Adaptavist.com Ltd
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL (GPL-LICENSE.txt) licenses.
 *
 * Author: Mark Gibson (jollytoad at gmail dot com)
 */
/* Datatype parsing functions.
 */
(jQuery.dt || (function($) {

$.dt = {
	string:
		function( str ) { return str === null || str === undefined ? undefined : ''+str; },
		
	bool:
		function( str ) {
			return str === true || str === 'true' || str === '1' ? true :
				str === false || str === 'false' || str === '0' ? false :
				undefined;
		},
		
	number:
		parseFloat,
	
	idref:
		function( str ) {
			return $( str ? document.getElementById(str) : [] );
		},
	
	idrefs:
		function( str ) {
			str = $.trim(str);
			return $( str ? '#' + str.split(/\s+/).join(',#') : [] );
		},
	
	tokens:
		function( str ) {
			return $( str ? str.split(/\s+/) : [] );
		},
	
	integer:
		function( str ) {
			return parseInt(str, 10);
		}
};

})(jQuery)
);

/*
 * jQuery Datatypes Utility Functions 0.1 (20090515)
 *
 * Copyright (c) 2009 Adaptavist.com Ltd
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL (GPL-LICENSE.txt) licenses.
 *
 * Author: Mark Gibson (jollytoad at gmail dot com)
 */
(function($) {

var fns = {
	// Convert an object/array/jQuery to a raw string
	write:
		function( value ) {
			if ( value.jquery ) {
				// Convert to an idrefs string
				return Array.prototype.join.call(value.map(function() { return this.id; }), ' ');
			}
			if ( typeof value.id === 'string' ) {
				// Assume this is a single DOM element, convert to an idref string
				return value.id;
			}
			if ( $.isArray(value) ) {
				// Assume this is tokens
				return value.join(' ');
			}
			// Otherwise just assume it is or can be converted to a string as normal
			return "" + value;
		},
	
	// Read an attribute and convert it to the specified datatype
	attr:
		function( elem, name, datatype ) {
			return this[datatype]( $.attr( elem, name ) );
		}
};

// Add functions to $.dt and $.xsd
$.each(['dt','xsd'], function() {
	if ( $[this] ) {
		$.extend($[this], fns);
	}
});

})(jQuery);

