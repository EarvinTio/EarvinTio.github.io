var xhttp = new XMLHttpRequest();
var rand = 0;
var fieldRand = 0;
var buttonRand = 0;

function noDuplicate(prev, xml, isButton) {
	if (isButton) {
		rand = Math.floor(Math.random()*xml.responseXML.getElementsByTagName("button").length);
	} else {
		rand = Math.floor(Math.random()*xml.responseXML.getElementsByTagName("line").length);
	}
	if (rand != prev) {
		return rand
	} else {
		return noDuplicate(prev, xml, isButton)
	}
}

function updateFields(xml){
	fieldRand = noDuplicate(fieldRand, xml, false);
	document.getElementById("line").innerHTML = xml.responseXML.getElementsByTagName("line")[fieldRand].childNodes[0].nodeValue;
    document.getElementById("title").innerHTML = xml.responseXML.getElementsByTagName("title")[fieldRand].childNodes[0].nodeValue;
    document.getElementById("author").innerHTML = xml.responseXML.getElementsByTagName("author")[fieldRand].childNodes[0].nodeValue;
}

function updateButton(xml){
	buttonRand = noDuplicate(buttonRand, xml, true);
	document.getElementById("button").innerHTML = xml.responseXML.getElementsByTagName("button")[buttonRand].childNodes[0].nodeValue;
}

xhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
	updateFields(this);
	updateButton(this);
  }
};

document.getElementById("button").onclick = function() {
	updateFields(xhttp);
	updateButton(xhttp);
};

xhttp.open("GET", "../inspire/inspire.xml", true);
xhttp.send();

/*global jQuery */
/*!
* FitText.js 1.2
*
* Copyright 2011, Dave Rupert http://daverupert.com
* Released under the WTFPL license
* http://sam.zoy.org/wtfpl/
*
* Date: Thu May 05 14:23:00 2011 -0600
*/

(function( $ ){

  $.fn.fitText = function( kompressor, options ) {

    // Setup options
    var compressor = kompressor || 1,
        settings = $.extend({
          'minFontSize' : Number.NEGATIVE_INFINITY,
          'maxFontSize' : Number.POSITIVE_INFINITY
        }, options);

    return this.each(function(){

      // Store the object
      var $this = $(this);

      // Resizer() resizes items based on the object width divided by the compressor * 10
      var resizer = function () {
        $this.css('font-size', Math.max(Math.min($this.width() / (compressor*10), parseFloat(settings.maxFontSize)), parseFloat(settings.minFontSize)));
      };

      // Call once to set.
      resizer();

      // Call on resize. Opera debounces their resize by default.
      $(window).on('resize.fittext orientationchange.fittext', resizer);

    });

  };

})( jQuery );

jQuery("#line").fitText();