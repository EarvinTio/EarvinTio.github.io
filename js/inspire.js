var xhttp = new XMLHttpRequest();

xhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
	updateFields(this);
	updateButton(this);
  }
};

document.getElementById("button").onclick = function() {
	updateFields(this);
	updateButton(this);
};

function updateFields(xml){
	var rand = Math.floor(Math.random()*xml.responseXML.getElementsByTagName("line").length);
	document.getElementById("line").innerHTML = xml.responseXML.getElementsByTagName("line")[rand].childNodes[0].nodeValue;
    document.getElementById("title").innerHTML = xml.responseXML.getElementsByTagName("title")[rand].childNodes[0].nodeValue;
    document.getElementById("author").innerHTML = xml.responseXML.getElementsByTagName("author")[rand].childNodes[0].nodeValue;
}

function updateButton(xml){
	var rand = Math.floor(Math.random()*xml.responseXML.getElementsByTagName("button").length);
	document.getElementById("button").innerHTML = xml.responseXML.getElementsByTagName("button")[rand].childNodes[0].nodeValue;
}

xhttp.open("GET", "../inspire/inspire.xml", true);
xhttp.send();