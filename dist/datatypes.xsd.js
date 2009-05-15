/*
 * jQuery XSD Datatypes 0.1 (20090515)
 *
 * Copyright (c) 2009 Adaptavist.com Ltd
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL (GPL-LICENSE.txt) licenses.
 *
 * Author: Mark Gibson (jollytoad at gmail dot com)
 */
/* Provides XSD datatype names for jQuery.dt, based on:
 * XML Schema 1.1 Part 2: Datatypes - http://www.w3.org/TR/xmlschema11-2
 */
(jQuery.xsd || jQuery.dt && (function($) {

$.dt.na = function() {};

$.xsd = {
	// Primative Datatypes
	'string': $.dt.string,
	'boolean': $.dt.bool,
	'decimal': $.dt.number,
	'precisionDecimal': $.dt.number,
	'float': $.dt.number,
	'double': $.dt.number,
	'duration': $.dt.na,
	'dateTime': $.dt.na,
	'time': $.dt.na,
	'date': $.dt.na,
	'gYearMonth': $.dt.na,
	'gYear': $.dt.na,
	'gMonthDay': $.dt.na,
	'gDay': $.dt.na,
	'gMonth': $.dt.na,
	'hexBinary': $.dt.na,
	'base64Binary': $.dt.na,
	'anyURI': $.dt.string,
	'QName': $.dt.string,
	'NOTATION': $.dt.na,

	// Other Built-in Datatypes
	'normalizedString': $.dt.string,
	'token': $.dt.string,
	'language': $.dt.string,
	'NMTOKEN': $.dt.string,
	'NMTOKENS': $.dt.tokens,
	'Name': $.dt.string,
	'NCName': $.dt.string,
	'ID': $.dt.string,
	'IDREF': $.dt.idref,
	'IDREFS': $.dt.idrefs,
	'ENTITY': $.dt.na,
	'ENTITIES': $.dt.na,
	'integer': $.dt.integer,
	'nonPositiveInteger': $.dt.integer,
	'negativeInteger': $.dt.integer,
	'long': $.dt.integer,
	'int': $.dt.integer,
	'short': $.dt.integer,
	'byte': $.dt.integer,
	'nonNegativeInteger': $.dt.integer,
	'unsignedLong': $.dt.integer,
	'unsignedInt': $.dt.integer,
	'unsignedShort': $.dt.integer,
	'unsignedByte': $.dt.integer,
	'positiveInteger': $.dt.integer,
	'yearMonthDuration': $.dt.na,
	'dayTimeDuration': $.dt.na,
	'dateTimeStamp': $.dt.na
};

// Poach functions from jQuery.dt
$.each(['attr','write'], function() {
	if ( $.dt[this] ) {
		$.xsd[this] = $.dt[this];
	}
});

})(jQuery)
);

