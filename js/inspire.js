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
	var rand = Math.floor(Math.random()*Math.floor(xml.responseXML.getElementsByTagName("line").length+1));
	console.log(xml.responseXML.getElementsByTagName("line").length); //comment
	document.getElementById("line").innerHTML = xml.responseXML.getElementsByTagName("line")[rand].childNodes[0].nodeValue;
    document.getElementById("title").innerHTML = xml.responseXML.getElementsByTagName("title")[rand].childNodes[0].nodeValue;
    document.getElementById("author").innerHTML = xml.responseXML.getElementsByTagName("author")[rand].childNodes[0].nodeValue;
}

function updateButton(xml){
	var rand = Math.floor(Math.random()*Math.floor(xml.responseXML.getElementsByTagName("button").length+1));
	console.log(xml.responseXML.getElementsByTagName("button").length); //comment
	document.getElementById("button").innerHTML = xml.responseXML.getElementsByTagName("button")[rand].childNodes[0].nodeValue;
}

xhttp.open("GET", "../inspire/inspire.xml", true);
xhttp.send();