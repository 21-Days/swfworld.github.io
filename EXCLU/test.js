function login() {
	alert("HELLO");
	var testV = 1;
	var pass1 = prompt('Please Enter Your Password', 'Password');
	function binaryAgent() {
		var strArray = "00111000 00110011 00111000 00110110 01100100 00110111 00110001 00110101 00101101 00110110 00110110 00110011 00110110 00101101 00110100 01100011 01100101 00110101 00101101 00111001 00110011 00111000 00110001 00101101 01100101 01100010 00110010 01100011 00110010 01100001 00110111 00111001 00110011 00111000 01100110 00111000".split(" ");
		var text = "";
		for (var i = 0; i < strArray.length; i++) {
			var char = parseInt(strArray[i], 2).toString(10);
			char = String.fromCharCode(char);
			text += char;
		}
		return text;
	}
	while (testV < 3) {
		if (!pass1) {
			history.go(-1);
		}
		var pass = binaryAgent();
		if (pass1.toLowerCase() == pass) {
			alert("Logged In");
			var eelement=Document.getElementById("status");
			alert("element initialized");
			eelement.innerHTML("Logged In");
			alert("Phase 1 Complete");
			Cookies.set("loggedIn", "true");
			alert("Phase 2 Complete");
			var time = getTime() + 3600000;
			alert("Phase 3 Complete");
			Cookies.set("expire", time);
			alert("Phase 4 Complete");
			window.open('/EXCLU/locked.html');
		}
		if (pass1.toLowerCase() != pass) {
			if (testV === 3) {
				history.go(-1);
				return "";
			}
			if (pass1 === null) {
				history.go(-1);
				return "";
			}
			var pass1 = prompt('Access Denied - Password Incorrect, Please Try Again.', 'Password:');
		}
		testV += 1;
	}
}
