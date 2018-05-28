function onload(){
	document.getElementById("pxy").style.display="none";
	document.getElementById("topdiv").style.display="none";
}
function google(num){
	if (!document.getElementById("searchbox").value){
		alert("ERROR: No input!");
	}
	else {
		if(num==1){
			var normlink = document.getElementById("searchbox").value;
			var n2="https://www.google.com/search?q="+normlink;
			var encodedlink = btoa(n2);
			console.log(encodedlink);
			var iframe=document.getElementById("pxy");
			document.getElementById("topdiv").style.display="block";
			document.getElementById("mainelems").style.display="none";
			iframe.src="http://phpxy.gq/phpxy/index.php?q="+encodedlink;
			iframe.style.display="block";
		}
		else if(num==2){
			var normlink = document.getElementById("searchbox").value;
			var n2="https://www.google.com/search?q="+normlink;
			var encodedlink = btoa(n2);
			console.log(encodedlink);
			var iframe=document.getElementById("pxy");
			document.getElementById("topdiv").style.display="block";
			document.getElementById("mainelems").style.display="none";
			iframe.src="http://unbpxy.000webhostapp.com/phpxy/index.php?q="+encodedlink;
			iframe.style.display="block";
		}
	}
}
function go(num){
	if (!document.getElementById("searchbox").value){
		alert("ERROR: No input!");
	}
	else {
		if(num==1){
			var normlink = document.getElementById("searchbox").value;
			var encodedlink = btoa(normlink);
			console.log(encodedlink);
			var iframe=document.getElementById("pxy");
			document.getElementById("topdiv").style.display="block";
			document.getElementById("mainelems").style.display="none";
			iframe.src="http://phpxy.gq/phpxy/index.php?q="+encodedlink;
			iframe.style.display="block";
		}
		else if(num==2){
			var normlink = document.getElementById("searchbox").value;
			var encodedlink = btoa(normlink);
			console.log(encodedlink);
			var iframe=document.getElementById("pxy");
			document.getElementById("topdiv").style.display="block";
			document.getElementById("mainelems").style.display="none";
			iframe.src="http://unbpxy.000webhostapp.com/phpxy/index.php?q="+encodedlink;
			iframe.style.display="block";
		}
	}
}
function tinysearch(num){
	if (!document.getElementById("searchbox2").value){
	}
	else {
		if(num==1){
			var normlink = document.getElementById("searchbox2").value;
			var encodedlink = btoa(normlink);
			console.log(encodedlink);
			var iframe=document.getElementById("pxy");
			iframe.src="http://phpxy.gq/phpxy/index.php?q="+encodedlink;
			iframe.style.display="block";
		}
		else if(num==2){
			var normlink = document.getElementById("searchbox2").value;
			var encodedlink = btoa(normlink);
			console.log(encodedlink);
			var iframe=document.getElementById("pxy");
			iframe.src="http://unbpxy.000webhostapp.com/phpxy/index.php?q="+encodedlink;
			iframe.style.display="block";
		}
	}
}
function ret(){
	var decodedString = Base64.decode(encodedString);
	console.log(decodedString);
}
