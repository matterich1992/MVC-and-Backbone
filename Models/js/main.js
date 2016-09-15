/* 
var Song = Backbone.Model.extend({
	defaults: {
		genre: "Jazz"
	}
});

var song = new Song({
	artist: "Miles Davis",
	title: "Blue in Green",
	year: 1959
});

//to convert to JSON = song.toJSON();
//song.get('title')
//song.unset(); removes attribute
//song.clear(); clears all attr
//song.has() if attr is present;

///////////
*/
/*
var Song = Backbone.Model.extend({ // this validates tha our song must have a title
	validate: function(attrs){
		if(!attrs.title){
			return "Title is required";
		}
	}
});


var song = new Song({
	title: "Dancing in the Rain"
});


//song.isValid();
//song.validationError
*/


//Inheritance with Backbone//
var Animal = Backbone.Model.extend({
	walk: function(){
		console.log("Animal Walking...");
	}
});


var Dog = Animal.extend({
	walk: function(){
		Animal.prototype.walk.apply(this);
		console.log("dog walking...");
	}
});

var dog = new Dog();

dog.walk();

//////////////// Connecting to the server ///////////////
//calling fetch() Method on the model whic will take care of the ajax call

//fetch() = GET
//save() = POST/PUT
//destroy() = DELETE

//urlRoot: "/api/songs/1"

//EX:
/*song.fetch({
success: function(){},
error: function(){}
})

song,save({}, {
	success: function(){},
	error: function(){}
});
*/
