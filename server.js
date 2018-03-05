// Node Dependencies
var express = require('express');
var path = require('method-override');
var bodyParser = require('body-parser');

// Set up Express App
var app = express();
var PORT = process.env.PORT || 8080;


// Listener - Start the server
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});