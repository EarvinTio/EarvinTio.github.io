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
    //document.getElementById("author").innerHTML = xml.responseXML.getElementsByTagName("author")[fieldRand].childNodes[0].nodeValue;
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