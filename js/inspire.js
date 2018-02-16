var xhttp = new XMLHttpRequest();

function updateFields(){
	var rand = Math.floor(Math.random()*Math.floor(this.responseXML.getElementsByTagName("piece").length+1));
	console.log(this.responseXML.getElementsByTagName("piece").length);
	document.getElementById("line").innerHTML = this.responseXML.getElementsByTagName("line")[rand].childNodes[0].nodeValue;
    document.getElementById("title").innerHTML = this.responseXML.getElementsByTagName("title")[rand].childNodes[0].nodeValue;
    document.getElementById("author").innerHTML = this.responseXML.getElementsByTagName("author")[rand].childNodes[0].nodeValue;
}

function updateButton(){
	var rand = Math.floor(Math.random()*Math.floor(this.responseXML.getElementsByTagName("button").length+1));
	console.log(this.responseXML.getElementsByTagName("button").length);
	document.getElementById("button").innerHTML = this.responseXML.getElementsByTagName("button")[rand].childNodes[0].nodeValue;
}

xhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
	updateFields();
  }
};

document.getElementById("button").onclick = function() {
	updateFields();
	updateButton();
};

xhttp.open("GET", "../inspire/inspire.xml", true);
xhttp.send();