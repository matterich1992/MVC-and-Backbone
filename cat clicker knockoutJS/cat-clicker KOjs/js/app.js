var ViewModel = function(){
	this.clickCount = ko.observable(0);
	this.name = ko.observable("Mittens");
	this.imgSrc = ko.observable('img/434164568_fea0ad4013_z.jpg');

	this.level = ko.computed(function(){
		var age;
		if(this.clickCount()<=5){
			age = "Newborn";
		}

		else if(this.clickCount()<=10){
			age = "Child";
		}

		else if(this.clickCount()<=20){
			age="Teenager";	
		}
		else if(this.clickCount()<=25){
			age="Confused 20's";
		}

		else{
			age = "Adult";
		}
		
		return age;
	}, this);



	this.incrementCounter = function(){
		this.clickCount(this.clickCount()+1);
	// same as var count = 0;
	//	count++;
	};


}

ko.applyBindings(new ViewModel());