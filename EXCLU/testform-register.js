function submit(){
	var mysql = require('mysql');
	var con = mysql.createConnection({
			host: "maindb.czwi63gmjfs0.us-east-1.rds.amazonaws.com",
			user: "yourusername",
			password: "yourpassword",
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
			console.log("got confirmation");
			});
			var i=0;
			while(i<sql.length){
				if(sql[i]==document.getElementById("registerKey").value){
					alert("Register key correct!");
					break;
				}
				else{
					alert("Sorry, but your register key was incorrect.");}
				i++;
			}
		}
		var sql="SELECT * FROM EXCLU_accounts"; /*NEEDS WORK HERE*/
		con.query(sql, function(err){
			if(err){throw err;}
			
		})
		while(user)
		var sql = "INSERT INTO EXCLU_accounts (user, pwd, registerKey, accountType) VALUES ("+document.getElementById('user').value+", "+document.getElementById("pwd")+", "+document.getElementById("registerKey")+", 1)";
		con.query(sql, function (err, result) {
		if (err){throw err;}
		console.log("1 record inserted");
		alert("Success!")
		});
	});
}
