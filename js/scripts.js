var language=navigator.language||navigator.userLanguage;
document.it=language=="it-IT";
if(document.it)
{
	document.getElementById("contact").innerHTML="CONTATTI";
	document.getElementById("home").innerHTML="HOME";
	document.getElementById("about").innerHTML="INFO";
}
