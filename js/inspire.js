var xhttp = new XMLHttpRequest();

xhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
	var rand = Math.floor((Math.random()*this.responseXML.getElementsByTagName("line").length)+1);
    console.log(this.responseXML.getElementsByTagName("line").length);
	console.log(rand);
	document.getElementById("title").innerHTML = this.responseXML.getElementsByTagName("title")[rand].nodeValue;
    document.getElementById("title").innerHTML = this.responseXML.getElementsByTagName("title")[rand].nodeValue;
    document.getElementById("title").innerHTML = this.responseXML.getElementsByTagName("title")[rand].nodeValue;
  }
};

xhttp.open("GET", "../inspire/inspire.xml", true);
xhttp.send();