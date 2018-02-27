var xhttp = new XMLHttpRequest();
var fieldRand = 0;
var prevFieldRand = 0;
var buttonRand = 0;
var prevButtonRand = 0;

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

function noDuplicate(prev, xml, button) {
	if (button) {
		rand = Math.floor(Math.random()*xml.responseXML.getElementsByTagName("button").length);
	} else {
		rand = Math.floor(Math.random()*xml.responseXML.getElementsByTagName("line").length);
	}
	if (rand != prev) {return rand}
	else {return noDuplicate(prev)}
}

function updateFields(xml){
	console.log("prevFieldRand is %d.\n", prevFieldRand);
	fieldRand = noDuplicate(prevFieldRand, xml, false);
	console.log("fieldRand is %d.\n", fieldRand);
	prevFieldRand = fieldRand;
	document.getElementById("line").innerHTML = xml.responseXML.getElementsByTagName("line")[fieldRand].childNodes[0].nodeValue;
    document.getElementById("title").innerHTML = xml.responseXML.getElementsByTagName("title")[fieldRand].childNodes[0].nodeValue;
    document.getElementById("author").innerHTML = xml.responseXML.getElementsByTagName("author")[fieldRand].childNodes[0].nodeValue;
}

function updateButton(xml){
	console.log("prevButtonRand is %d.\n", prevButtonRand);
	buttonRand = noDuplicate(prevButtonRand, xml, true);
	console.log("buttonRand is %d.\n", buttonRand);
	prevButtonRand = buttonRand;
	document.getElementById("button").innerHTML = xml.responseXML.getElementsByTagName("button")[buttonRand].childNodes[0].nodeValue;
}

xhttp.open("GET", "../inspire/inspire.xml", true);
xhttp.send();