function passWord() {
	function stringToBinary(str, spaceSeparatedOctets) {
		function zeroPad(num) {
			return "00000000".slice(String(num).length) + num;
		}
		return str.replace(/[\s\S]/g, function(str) {
			str = zeroPad(str.charCodeAt().toString(2));
			return !1 == spaceSeparatedOctets ? str : str + " "
		});
	};
	var testV = 1;
	var pass1 = prompt('Please Enter Your Password','Password:');
	while (testV < 3) {
		if (!pass1){history.go(-1);}
		if (pass1.toLowerCase() == stringToBinary(FileReader.readAsText("/EXCLU/passwd.txt");)).toLowerCase() {
			alert('You Got it Right!');
			window.open('protectpage.html');
			break;
		} 
		testV+=1;
		var pass1 = prompt('Access Denied - Password Incorrect, Please Try Again.','Password:');
	}
	if (pass1.toLowerCase()!="password" & testV ==3) {
		history.go(-1);
		return " ";
	}
};
