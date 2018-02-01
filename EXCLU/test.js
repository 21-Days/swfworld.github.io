var mysql = require('mysql');
var connection = mysql.createConnection({
host     : 'sql9.freemysqlhosting.net',
user     : 'sql9217870',
password : 'pFPkqQSabh',
database : 'sql9217870'
});
connection.connect();
connection.query('SELECT usr, from accounts', function(err, rows, fields) {
if (!err) {console.log('The solution is: ', rows);}
else {console.log('Error while performing Query.');}
});
connection.end();
