var xhttp = new XMLHttpRequest();

xhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
	updateFields(this);
  }
};

document.getElementById("button").onclick = function() {
	updateFields(this);
	updateButton(this);
};

function updateFields(){
	var rand = Math.floor(Math.random()*Math.floor(this.responseXML.getElementsByTagName("piece").length+1));
	console.log(this.responseXML.getElementsByTagName("piece").length); //comment
	document.getElementById("line").innerHTML = this.responseXML.getElementsByTagName("line")[rand].childNodes[0].nodeValue;
    document.getElementById("title").innerHTML = this.responseXML.getElementsByTagName("title")[rand].childNodes[0].nodeValue;
    document.getElementById("author").innerHTML = this.responseXML.getElementsByTagName("author")[rand].childNodes[0].nodeValue;
}

function updateButton(){
	var rand = Math.floor(Math.random()*Math.floor(this.responseXML.getElementsByTagName("button").length+1));
	console.log(this.responseXML.getElementsByTagName("button").length); //comment
	document.getElementById("button").innerHTML = this.responseXML.getElementsByTagName("button")[rand].childNodes[0].nodeValue;
}

xhttp.open("GET", "../inspire/inspire.xml", true);
xhttp.send();