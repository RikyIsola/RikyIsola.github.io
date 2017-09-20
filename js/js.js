var about="about.html";
var contact="contact.html";
var index="index.html";
function redirect(tag)
{
	var dest;
	if(tag==0)dest=about;
	else if(tag==1)dest=contact;
	else dest=index;
	window.location.replace(dest);
}
var lingua=navigator.language;
var id;
var contatti=["CONTATTI","CONTACT"];
var home=["HOME","HOME"];
var info=["INFO","ABOUT"];
//var arrivaPresto=["ARRIVA PRESTO","COMING SOON"];
//var contattiTesto=["",""];
if(lingua.indexOf("it")!=-1)id=0;
else id=1;
document.getElementById("CONTATTI").innerHTML=window.contatti[id];
document.getElementById("HOME").innerHTML=window.home[id];
document.getElementById("INFO").innerHTML=window.info[id];
window.lingua=id;
