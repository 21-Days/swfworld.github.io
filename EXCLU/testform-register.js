var flag=false;
function register(){
	function binaryAgent(){
	}
	var mysql = require('mysql');
	var con = mysql.createConnection({
			host: "maindb.czwi63gmjfs0.us-east-1.rds.amazonaws.com",
			user: "admin",
			password: binaryAgent(),
			database: "maindb"
	});	
	con.connect(function(err) {
		if (err){throw err;}
		console.log("Connected!");
		var registered=false;
		while(registered=false){
			var sql = "SELECT * FROM EXCLU_registerKeys WHERE regKey="+document.getElementById("registerKey").value;
			con.query(sql, function(err, result){
				if(err){throw err;}
				alert("got confirmation");
				var i=0;
				while(i<result.length){
					if(result[i]=="0" || result[i]==0){
						alert("Register key correct!");
						registered=true;
						return=" ";
					}
					else{
						alert("Sorry, but your register key was incorrect.");
						document.getElementById("regkeythrow").innerHTML="Register key incorrect";
						flag=true;
						break;
					}
					i++;
				}
				if(flag=true){
					return=" ";
				}
			});
			if(flag="true"){
				break;
			}
		}
		if(document.getElementById("pwd").value != document.getElementById("pwdconf").value){
			document.getElementById("pwdthrow").innerHTML="Passwords do not match!";
			var flag=true;
		}
		if(flag=true){
			return=" ";
		}
		var lastnum=0;
		var sql="SELECT userId FROM EXCLU_accounts";
		con.query(sql, function(err, result){
			if(err){throw err;}
			console.log("retrieved database info");
			var isRegistered=false;
			lastnum=result(-1).pop();
		})
		var sql = "INSERT INTO EXCLU_accounts (userId, user, pwd, registerKey, accountType) VALUES ("+lastnum+", "+document.getElementById('user').value+", "+document.getElementById("pwd")+", "+document.getElementById("registerKey")+", 1)";
		con.query(sql, function (err, result) {
			if (err){throw err;}
			console.log("1 record inserted");
			alert("Success!");
		});
	});
	if(flag==true){
		return=" ";
	}
}
