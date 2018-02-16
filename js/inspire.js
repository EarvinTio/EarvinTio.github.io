var xhttp = new XMLHttpRequest();

xhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
	var rand = Math.floor((Math.random()*this.responseXML.getElementsByTagName("line").length)+1);
    console.log(rand);
	document.getElementById("line").innerHTML = this.responseXML.getElementsByTagName("line")[0].childNodes[rand].nodeValue;
    document.getElementById("author").innerHTML = this.responseXML.getElementsByTagName("author")[0].childNodes[rand].nodeValue;
    document.getElementById("title").innerHTML = this.responseXML.getElementsByTagName("title")[0].childNodes[rand].nodeValue;
  }
};

xhttp.open("GET", "../inspire/inspire.xml", true);
xhttp.send();