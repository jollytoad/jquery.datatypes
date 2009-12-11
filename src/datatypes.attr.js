/*
 * jQuery Datatypes - Attribute functions @VERSION
 *
 * Copyright (c) 2009 Adaptavist.com Ltd
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL (GPL-LICENSE.txt) licenses.
 *
 * Author: Mark Gibson (jollytoad at gmail dot com)
 */
/* Depends:
 *   datatypes.core.js
 */
(function($) {

$.fn.extend({

// Toggle a boolean attribute state.
// Only toggles if the state is already set, unless a default value is given.
attrToggle: function( attr, def ) {
	return this.each(function() {
		var state = $.dt.bool( $.attr(this, attr) );

		// Use the given default as the current state if not set yet
		if ( state === undefined ) { state = def; }

		// Only toggle the state if it is already set
		if ( state !== undefined ) {
			$.attr(this, attr, ""+!state);
		}
	});
}

});

})(jQuery);

