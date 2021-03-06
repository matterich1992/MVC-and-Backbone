//Backbone Car Model__ Udemy Class Learb Backbone with Mosh


/*Create a Backbone model for a Vehicle. A Vehicle is uniquely identified via one of its
attributes called “registrationNumber”, which cannot be null or undefined.
Vehicles can be retrieved from the server at “/api/vehicles”.
A Vehicle should have a method called start(), which logs a message in the console:
“Vehicle started.”
*/


var Vehicle = Backbone.Model.extend({

	idAttribute: "registrationNumber",
	urlRoot: '/api/vehicles',

		validate: function(attrs){
			if(!attrs.registrationNumber){
				return"The Vehicle is not Valid";
			}
		}, 

		start: function(){
			console.log("Vehicle Started");
		}
});

//Derive a Backbone model from Vehicle and call it "Car";
var Car = Vehicle.extend({
	start: function(){
		console.log("car with registration number: " + this.get('registrationNumber') + ", started.");
	}
});

var car = new Car({
	registrationNumber: "X12345",
	color: 'red'
});
// car.isValid
// car.toJSON
// car.get
// car.unset
// car.clear
// car.has

//Remove the RN attr

car.unset("registrationNumber");

if(!car.isValid()){
	console.log(car.validationError);
}

car.set("registrationNumber","X12345");

if(!car.isValid()){
	console.log(car.validationError);
}

car.start();

