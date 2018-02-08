var isuser=false;
function login(){
	function binaryAgent(){var strArray="01000101 01110010 01101001 01100011 01101110 01101001 01100101 00110001 00111001 00111001 00111000 0001010".split(" ");var text="";for(var i=0;i<strArray.length;i++){var char=parseInt(strArray[i],2).toString(10);char=String.fromCharCode(char);text+=char;}return text;}
	var mysql = require('mysql');
	var connection = mysql.createConnection({
		host     : 'maindb.czwi63gmjfs0.us-east-1.rds.amazonaws.com',
		user     : 'admin',
		password : binaryAgent(),
		database : 'maindb'
	});
	connection.connect(function(err){
	connection.query('SELECT user from EXCLU_accounts WHERE user='+document.getElementById("user").value+document.getElementById("pwd"), function(err, result) {
		if(!err){
			var i=0;
			while(i<result.length){
				if(result[i]==document.getElementById("user").value){
					isuser=true;
					break;
				}
				else{
					isuser=false;
					break;
				}
			}
		}
		else {console.log('Error while performing Query.');}
	});
	if(isuser==false){
		return " ";
	}
	connection.query('', function(err))
	if(){}
	});
	connection.end();
}
