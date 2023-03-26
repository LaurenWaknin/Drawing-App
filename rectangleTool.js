function RectangleTool(){
	
	//set an icon and a name for the object
	this.icon = "assets/rectangle.jpg";
	this.name = "rectangleTool";
	
	const ctx = canvas.getContext('2d');

	var beginMouseX = -1;
	var beginMouseY = -1;
	var drawing = false;

	this.draw = function(){

		if(mouseIsPressed){
			if(beginMouseX == -1){
				ctx.lineWidth = rectangleSizeSlider.value();
				beginMouseX = mouseX;
				beginMouseY = mouseY;
				drawing = true;
                noFill();
				loadPixels();
			}
			else{
				updatePixels();
				var rect_width = mouseX-beginMouseX;
				var rect_height = mouseY-beginMouseY;
                rect(beginMouseX, beginMouseY, rect_width, rect_height);
			}
		}
		else if(drawing){
			drawing = false;
			beginMouseX = -1;
			beginMouseY = -1;
		}
	};

	//adds a button and click handler to the options area. 
	this.populateOptions = function() {
		select(".options").html(
			"<slider id='rectangleThickness'>Rectangle Outline Thickness</slider>");
			rectangleSizeSlider = createSlider(5,50,20);
			rectangleSizeSlider.parent("rectangleThickness");
	};

	//removes tool
	this.unselectTool = function(){
        updatePixels();
	    //clear options
        select(".options").html("");
	    rectangleSizeSlider.remove();      
    };
}
