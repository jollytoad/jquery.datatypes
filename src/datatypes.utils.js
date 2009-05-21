/*
 * jQuery Datatypes Utility Functions @VERSION (@DATE)
 *
 * Copyright (c) 2009 Adaptavist.com Ltd
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL (GPL-LICENSE.txt) licenses.
 *
 * Author: Mark Gibson (jollytoad at gmail dot com)
 */
/* Optional dependencies:
 *   datatypes.core.js
 *   datatypes.xsd.js
 *   datatypes.idrefs.js
 */
(function($) {

var fns = {
	// Convert an object/array/jQuery to a raw string
	write:
		function( value ) {
			if ( value === undefined || value === null ) {
				return '';
			}
			if ( value.jquery ) {
				// Convert to an idrefs string
				return $.fn.idrefs ? $(value).idrefs() :
					Array.prototype.join.call(value.map(function() { return this.id; }), ' ');
			}
			if ( value.nodeType === 1 ) {
				// Assume this is a single DOM element, convert to an idref string
				return $.id ? $.id(value) : value.id;
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

