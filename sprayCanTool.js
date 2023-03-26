function SprayCanTool(){
	
	//set an icon and a name for the object
	this.name = "sprayCanTool";
	this.icon = "assets/spray.jpg";

	const ctx = canvas.getContext('2d');

	var points = 13 ;
	var spread = 10;

	this.draw = function(){

		var r = random(5,10);
		if(mouseIsPressed){
			for(var i = 0; i < points; i++){
				point(random(mouseX-spread, mouseX + (spread+spraySizeSlider.value())), random(mouseY-spread, mouseY+spread));
			}
		}
	};

	//adds a button and click handler to the options area. 
	this.populateOptions = function() {
		select(".options").html(
			"<slider id='sprayThickness'>Spray Thickness</slider>");
			spraySizeSlider = createSlider(5,50,20);
			spraySizeSlider.parent("sprayThickness");
	};
}