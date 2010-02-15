/*
---

script: String.Slugify.js

description: Extends the String native object to have a slugify method, useful for url slugs.

license: MIT-style license

authors: Stian Didriksen

requires:
- core:1.2.4/String
- core:1.2.4/$util
- core:1.2.4/Array
- more:1.2.4/String.Extras

provides: [String.Slugify]

...
*/

String.implement({

	slugify: function(){
		return this.toString().tidy().standardize().replace(/\s+/g,'-').toLowerCase().replace(/[^a-z0-9\-]/g,'');
	}

});
