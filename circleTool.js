function CircleTool(){

	//set an icon and a name for the object
	this.icon = "assets/circle.jpg";
	this.name = "circleTool";

	const ctx = canvas.getContext('2d');

	var beginMouseX = -1;
	var beginMouseY = -1;
	var drawing = false;

	this.draw = function(){

		if(mouseIsPressed){
			if(beginMouseX == -1){
				ctx.strokeWidth == circleSizeSlider.value();
				beginMouseX = mouseX;
				beginMouseY = mouseY;
				drawing = true;
                noFill();
				loadPixels();
			}
			else{
				updatePixels();
				var x_axis = beginMouseX;
				var y_axis = beginMouseY;
				var ellipse_width = ((beginMouseX-mouseX)*2);
				var ellipse_height = ((beginMouseY-mouseY)*2);
                ellipse(x_axis , y_axis, ellipse_width, ellipse_height);
			}
		}
	else if(drawing){
			loadPixels();
			drawing = false;
			beginMouseX = -1;
			beginMouseY = -1;
		}
	};

	//adds a button and click handler to the options area. 
	this.populateOptions = function() {
		select(".options").html(
			"<slider id='circleThickness'>Circle Outline Thickness</slider>");
			circleSizeSlider = createSlider(5,50,20);
			circleSizeSlider.parent("circleThickness");
	};

	//removes tool
	this.unselectTool = function(){
        updatePixels();
	    //clear options
        select(".options").html("");
	    circleSizeSlider.remove();      
    };

}
