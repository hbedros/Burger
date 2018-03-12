// Set up MySQL connection
const mysql = require("mysql");
require('dotenv').config();
var connection;

// db connection config using JawsDB
if (process.env.JAWSDB_URL) {
	connection = mysql.createconnection(process.env.JAWSDB_URL);
} else {
	// default db config for local db
	connection = mysql.createConnection({

		host:'localhost',
		user:'root',
		password: process.env.DB_PASS,
		database: "burgers_db"

	});
};

// connection.connect(function(err) {
// 	if (err) {
// 		console.error('error conencting: ' + err.stack);
// 		return;
// 	}
// 	console.log('connected as id ' + connection.threadId);
// });

// export connection to burgers_db
connection.connect();
module.exports = connection;