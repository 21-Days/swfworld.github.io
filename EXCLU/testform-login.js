var isuser=false;
function login(){
	function binaryAgent(){var strArray="01000101 01110010 01101001 01100011 01101110 01101001 01100101 00110001 00111001 00111001 00111000 0001010".split(" ");var text="";for(var i=0;i<strArray.length;i++){var char=parseInt(strArray[i],2).toString(10);char=String.fromCharCode(char);text+=char;}return text;}
	var connection = mysql.createConnection({
		host     : 'maindb.czwi63gmjfs0.us-east-1.rds.amazonaws.com',
		user     : 'admin',
		password : binaryAgent(),
		database : 'maindb'
	});
	connection.connect(function(err){
		connection.query('SELECT user from EXCLU_accounts WHERE user='+document.getElementById("user").value, function(err, result){
			if(!err){
				var split1=result.split("'");
				console.log("split1 successful");
				console.log(split1[4]);
				if(split1[4]==document.getElementById("pwd").value){
					isuser=true;
					break;
				}
				else{
					isuser=false;
					break;
				}
			}
			else {console.log('Error while performing Query.');}
		});
		return null;
		break;
	});
	connection.end();
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
