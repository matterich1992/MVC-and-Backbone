var initialCats= [
{
	clickCount:0,
	name: "Mittens",
	imgSrc: "img/434164568_fea0ad4013_z.jpg",
	nicknames: ["Sir Mitty", "Puff", "kitty", "Donald Puff"]
},


{
	clickCount: 0,
	name: 'Whiskers',
	imgSrc: "img/cats-politics.jpg",
	nicknames:["Whiz"]
},
{
	clickCount: 0,
	name: 'Franklin',
	imgSrc: "img/catTwo.jpg",
	nicknames:["Mitty"]

	}
  ];


var Cat = function(data){ // add object literal as a parameter -- go down to new Cat() for the object
	this.clickCount = ko.observable(data.clickCount);//ko.observable(0);
	this.name = ko.observable(data.name);//ko.observable("Mittens");
	this.imgSrc = ko.observable(data.imgSrc);//ko.observable('img/434164568_fea0ad4013_z.jpg');
	this.nicknames = ko.observable(data.nicknames);//ko.observableArray(["Sir Mitty", "Puff", "kitty", "Donald Puff"]);
		//refer to the this.currentCat({}) on line 35--
		//this allows the data to not be hardcoded, but a function of the data passed in.


	this.level = ko.computed(function(){
		var age;
		var clicks = this.clickCount();
		if(clicks<13){
			age = "Newborn";
		} 
		else if(clicks<20){
			age = "Teen Cat";
		} 
		else if(clicks < 35){
			age = "Midlife Cat";
		}
		else if(clicks<50){
			age = "Getting older..";
		}
		else {
			age = "Almost Done with it..";
		}

		return age;
	}, this);

};



var ViewModel = function(){
	//var self = this; if you want to keep the currentCat --> self.currentCat().clickCount()
	// to access the outer "this" we can access this outside the viewmodel --> also seen "that"
	var self = this
	
	this.catList = ko.observableArray([]); //back to initial cats
		
		initialCats.forEach(function(catItem){ // looping through the initialCats array at the top of this page to create new
			self.catList.push( new Cat(catItem) );
		});


	this.currentCat  = ko.observable(this.catList()[0]);

	this.incrementCounter = function(){
		this.clickCount(this.clickCount()+1);
	// same as var count = 0;
	//	count++;
	};

	this.setCat = function(clickedCat){
		self.currentCat(clickedCat);  //self refers to viewModel
	}


}

ko.applyBindings(new ViewModel());

