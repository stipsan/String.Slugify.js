String.Slugify
==============

Extends the String native object to have a slugify method, useful for url slugs.

![Screenshot](http://s3.amazonaws.com/ember/xwmVk5lxm01jNBFEMXgyCcpQYZTk54B9_o.png)

How to Use
----------

String.Slugify extends the native String object, so it works on any ordinary string.

	#JS
	"slugify  ME    n%ø#w".slugify()

Returns "slugify-me-now"

Real world usage example
------------------------

This example shows how you can use slugify on two text inputs to create valid slugs from an ordinary title field.

The title field `<input id="title">`, and the slug `<input id="alias">`.

We're listening to the `change` event on the slug input, and the `keyup` and `keydown` events additionally on the `<input id="title">` element; This is to make the `<input id="alias">` input update as you type the title and be slugified in the process:

	#JS
	var aliasvalidator = function(){
		this.value = this.value.slugify();
	};
	var titlevalidator = function(){
		if(!$('alias').defaultValue) $('alias').value = this.value.slugify();
	};
	
	$('title').addEvents({'keyup': titlevalidator, 'keydown': titlevalidator, 'change': titlevalidator});
	$('alias').addEvents({'change': aliasvalidator});
	

Screenshots
-----------

![Screenshot](http://s3.amazonaws.com/ember/xwmVk5lxm01jNBFEMXgyCcpQYZTk54B9_o.png)
![Screenshot](http://s3.amazonaws.com/ember/KwF9b2hWKfLa36MFoTWM2vxuJpCi4OB3_o.png)