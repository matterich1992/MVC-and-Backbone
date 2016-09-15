/*==========MODEL==========*/

var model = {

currentCat: null,
cats: [
{
	clickCount: 0,
	name: 'Whiskers',
	imgSrc: "cats-politics.jpg"
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

	getCurrentCat: function(){

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
		this.catElem = document.getElementById("cat");
		this.catNameElem = document.getElementById("cat-name");
		this.catImageElem = document.getElementById("cat-img");
		this.countElem = document.getElementById("cat-count");
	
		// on click, increment the current cat's counter

		this.catImageElem.addEventListener('click', function(){
			controller.incrementCounter();
		});
			//render the view (updates the DOM with right values);
			this.render();
	},

	render: function(){
		var currentCat = controller.getCurrentCat();
		this.countElem.textContent = currentCat.clickCount;
		this.catNameElem.textContent = currentCat.name;
		this.catImageElem.src = currentCat.imgSrc;
	}
};


var catListView = {
	init: function(){
	// store the DOM element for easy access later
	this.catListElem = document.getElementById('cat-list');
	
	this.render();
	},

	render:function(){
		var cat, elem, i;
		// get the cats we'll be rendering from the octopus
		var cats = controller.getCats();
		//empty the cat list
		this.catListElem.innerHTML = '';

		//loop over the cats

		for(var i=0;i<cats.length;i++){
			cats = cats[i];

			//make a new cats list item
			elem = document.createElement('li');
			elem.textContent = cats.name;

			// on click, setCurrentCat and render the catView
            // (this uses our closure-in-a-loop trick to connect the value
            //  of the cat variable to the click event function)

            elem.addEventListener('click', (function(catCopy){
            	return function(){
            		controller.setCurrentCat(catCopy);
            		catView.render();
            	};
            })(cat));

            this.catListElem.appendChild(elem);
		}
	}

};
//GO!
controller.init();