/*prompt()*/
function setCookie(cname, cvalue, exhours) {
		var d = new Date();
		d.setTime(d.getTime() + (exhours * 60 * 60 * 1000));
		var expires = "expires="+d.toUTCString();
		document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
	}
function getCookie(cname) {
	var name = cname + "=";
	var ca = document.cookie.split(';');
	for(var i = 0; i < ca.length; i++) {
		var c = ca[i];
		while (c.charAt(0) == ' ') {
			c = c.substring(1);
		}
		if (c.indexOf(name) == 0) {
			return c.substring(name.length, c.length);
		}
	}
	return "";
}
function checkCookie(cookie) {
	var user = getCookie(cookie);
	if (loggedIn == "True") {
		alert("Welcome again!");
	} else {
		window.location.href = "/EXCLU/";
	}
}
function stringToBinary(str, spaceSeparatedOctets) {
	function zeroPad(num) {
		return "00000000".slice(String(num).length) + num;
	}
	return str.replace(/[\s\S]/g, function(str) {
		str = zeroPad(str.charCodeAt().toString(2));
		return !1 == spaceSeparatedOctets ? str : str + " "
	});
}
var testV = 1;
var pass1 = prompt('Please Enter Your Password','Password:');
while (testV < 3) {
	if (!pass1){history.go(-1);}
	if (pass1.toLowerCase() == stringToBinary(FileReader.readAsText("/EXCLU/passwd.txt");)).toLowerCase() {
		alert('You Got it Right!');
		window.open('protectpage.html');
		setcookie("loggedIn", "True", 1);
		break;
	} 
	testV+=1;
	var pass1 = prompt('Access Denied - Password Incorrect, Please Try Again.','Password:');
}
if (pass1.toLowerCase()!="password" & testV ==3) {
	history.go(-1);
	return " ";
}
