/*
 * jQuery Datatypes - Identifier functions @VERSION (@DATE)
 *
 * Copyright (c) 2009 Adaptavist.com Ltd
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL (GPL-LICENSE.txt) licenses.
 *
 * Author: Mark Gibson (jollytoad at gmail dot com)
 */
(function($) {

var prefix = 'id' + (+new Date()) + '-', count = 0;

// Get the id of an element, or generate a unique id if it lacks one
$.id = function( elem ) {
	if ( !elem.id ) {
		elem.id = prefix+(++count);
	}
	return elem.id;
};

// Returns a space separated list of the id's of the elements
$.fn.idrefs = function() {
	return $(this).map(function() { return $.id(this); }).join(' ');
};

})(jQuery);

