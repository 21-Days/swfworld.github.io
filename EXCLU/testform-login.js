var isuser=false;
function login(){
	var usr=document.getElementById("user")
	var pwd=document.getElementById("pwd")
	$.post("http://phpxy.gq/login.php",
	      
	      );
	if(isuser==true){
		Cookies.set("loggedIn", "true");
		console.log("Cookie set");
		window.location.replace("/EXCLU/locked.html");
		return null;
		break;
	}
	else{
		alert("Login Failed.");
	}
}
