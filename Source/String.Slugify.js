/*
---

script: String.Slugify.js

description: Extends the String native object to have a slugify method, useful for url slugs.

license: MIT-style license

authors: Stian Didriksen, Grzegorz Leoniec

requires:
- core:1.2.4/String
- core:1.2.4/$util
- core:1.2.4/Array
- more:1.2.4/String.Extras

provides: [String.Slugify]

...
*/

(function()
{
	String.implement(
	{
		slugify: function( replace )
		{
			if( !replace ) replace = '-';
			var str = this.toString().tidy().standardize().replace(/[\s\.]+/g,replace).toLowerCase().replace(new RegExp('[^a-z0-9'+replace+']','g'),replace).replace(new RegExp(replace+'+','g'),replace);
			if( str.charAt(str.length-1) == replace ) str = str.substring(0,str.length-1);
			return str;
		}
	});
})();