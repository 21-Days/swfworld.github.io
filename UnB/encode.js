var baseurl="";

window.onunload = function(){
	document.getElementById("pxy").src="about:blank";
	document.getElementById("searchbox").value="";
}
function onload(realnum){
	baseurl="https://node.roadkillsanta.repl.co/pxy/";
	document.getElementById("pxy").style.display="none";
	var input = document.getElementById("searchbox");
	input.addEventListener("keyup", function(event) {
		event.preventDefault();
		if (event.keyCode === 13) {
			document.getElementById("subbtn").click();
		}
	});
	var input = document.getElementById("searchbox2");
	input.addEventListener("keyup", function(event) {
		event.preventDefault();
		if (event.keyCode === 13) {
			document.getElementById("subbtn2").click();
		}
	});
	var iframe=document.getElementById("pxy");
}
function google(num){
	if (!document.getElementById("searchbox").value){
		alert("ERROR: No input!");
	}
	else {
		var normlink = document.getElementById("searchbox").value;
		var iframe=document.getElementById("pxy");
		document.getElementById("mainelems").style.display="none";
		iframe.src="https://node.roadkillsanta.repl.co/pxy/"+"https://www.google.com/search?q="+normlink;
		iframe.style.display="block";
	}
}
function go(num){
	if (!document.getElementById("searchbox").value){
		alert("ERROR: No input!");
	}
	else {
		var normlink = document.getElementById("searchbox").value;
		var iframe=document.getElementById("pxy");
		document.getElementById("mainelems").style.display="none";
		iframe.src="https://node.roadkillsanta.repl.co/pxy/"+encodedlink;
		iframe.style.display="block";
	}
}
