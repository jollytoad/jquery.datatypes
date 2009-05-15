/*!
 * jQuery Datatypes @VERSION (@DATE)
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
		function( str ) { return str; },
		
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
		parseInt
};

})(jQuery)
);

