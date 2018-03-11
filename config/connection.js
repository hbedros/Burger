// Set up MySQL connection
const Mysql = require("mysql");
var connection;


// db connection config using JawsDB
if (process.env.JAWSDB_URL) {
	connection = mysql.createconnection(process.env.JAWSDB_URL);
} else {
	// default db config for local db
	connection = mysql.createConnection({
		host: "localhost",
		user: "root",
		password: "",
		database: "burgers_db"
	});
};

connection.connect(function(err) {
	if (err) {
		console.error('error conencting: ' + err.stack);
		return;
	}
	console.log('connected as id ' + connection.threadId);
});

// export connection to burgers_db
module.exports = connection;