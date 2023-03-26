//a tool for drawing straight lines to the screen. Allows the user to preview
//the a line to the current mouse position before drawing the line to the 
//pixel array.
function LineToTool(){

	//set an icon and a name for the object
	this.icon = "assets/line.jpg";
	this.name = "lineToTool";

	const ctx = canvas.getContext('2d');

	var startMouseX = -1;
	var startMouseY = -1;
	var drawing = false;

	//draws the line to the screen 
	this.draw = function(){

		//only draw when mouse is clicked
		if(mouseIsPressed){
			//if it's the start of drawing a new line
			if(startMouseX == -1){
				ctx.lineWidth = lineSizeSlider.value();
				startMouseX = mouseX;
				startMouseY = mouseY;
				drawing = true;
				//save the current pixel Array
				loadPixels();
			}

			else{
				//update the screen with the saved pixels to hide any previous
				//line between mouse pressed and released
				updatePixels();
				//draw the line
				stroke(5);
				line(startMouseX, startMouseY, mouseX, mouseY);
			}

		}

		else if(drawing){
			//save the pixels with the most recent line and reset the
			//drawing bool and start locations
			loadPixels();
			drawing = false;
			startMouseX = -1;
			startMouseY = -1;
		}
	};

	//adds a button and click handler to the options area. 
	this.populateOptions = function() {
		select(".options").html(
			"<slider id='lineThickness'>Line Thickness</slider>");
			lineSizeSlider = createSlider(5,50,20);
			lineSizeSlider.parent("lineThickness");
	};

}
