const ORM = require("../config/orm.js");

// Gets all records from burgers table. Returns a promise.
function getAllBurgers() {
	return ORM.selectAll("burgers");
}

// Adds burger to burgers table. Returns a promise.
function add(name, devoured = false) {

	// container for error object
	let err = false;
	
	// validate name
	if ( name.length < 1 ) { 
		err = new Error("Invalid burger name. Burger name must have at least one character.");
	}

	// object with keys corresponding to burgers table
	let newBurger = {
		burger_name: name,
		devoured: devoured
	};

	// return a promise
	return new Promise( (resolve, reject) => { 
		if (err) { return reject(err); }
		return ORM.insertOne( "burgers", newBurger).then(resolve);
	});
}

// Updates information for a burger with matching unique id. Returns a promise.
function devour(id) {
	return ORM.updateOne("burgers", { id: id }, { devoured: true });
}

module.exports = {
	getAllBurgers: getAllBurgers,
	add: add,
	devour: devour
};