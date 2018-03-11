// Node Dependencies
const express = require('express');
const bodyParser = require('body-parser');
const path = require('method-override');
const exphbs = require("express-handlebars");
const routes = require("./controllers/burgers_controller.js");

// Set up Express App
let app = express();
let PORT = process.env.PORT || 8080;

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static('public'));

// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// Parse application/json
app.use(bodyParser.json());

// implement method override middleware
app.use(path("_method"));

// Set Handlebars
app.engine('handlebars', exphbs({ defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// Connecting router
app.use('/', routes);

// Listener - Start the server
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});