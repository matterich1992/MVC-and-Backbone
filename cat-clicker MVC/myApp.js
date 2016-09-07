/*==========MODEL==========*/

var model = {

currentCat: null,
cats: [
{
	clickCount: 0,
	name: 'Whiskers',
	imgSrc: "cat-politics.jpg"
},
{
	clickCount: 0,
	name: 'Mittens',
	imgSrc: "catTwo.jpg"

	}
  ]

};


/*==========CONTROLLER=====*/

var controller = {

	init: function(){
		// set our current cat to the first one in the list
		model.currentCat = model.cats[0];
		// tell our views to initialize
		catListView.init();
		catView.init();
	},

	getCurrentcat: function(){

		return model.currentCat;
	},

	getCats: function(){
		return model.cats;
	},
	// set the currently-selected cat to the object passed in
	setCurrentCat: function(cat){

		model.currentCat=cat;
	}, 

	incrementCounter: function(){
		model.currentCat.clickCount++;
		catView.render();
	}
};


/*============View===========*/

var catView= {
	init: function(){

	},

	render: function(){

	}
};


var catListView = {
	init: function(){

	},

	render:function(){

	}

};