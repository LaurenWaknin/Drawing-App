function FreehandTool(){

	//set an icon and a name for the object
	this.icon = "assets/pencil.jpg";
	this.name = "freehandTool";

	const ctx = canvas.getContext('2d');

	//to smoothly draw we'll draw a line from the previous mouse location
	//to the current mouse location. The following values store
	//the locations from the last frame. They are -1 to start with because
	//we haven't started drawing yet.
	var previousMouseX = -1;
	var previousMouseY = -1;

	this.draw = function(){
		
		//if the mouse is pressed
		if(mouseIsPressed){
			//check if they previousX and Y are -1. set them to the current
			//mouse X and Y if they are.
			if (previousMouseX == -1){
				previousMouseX = mouseX;
				previousMouseY = mouseY;
			}
			//if we already have values for previousX and Y we can draw a line from 
			//there to the current mouse location
			else{
						
				line(previousMouseX, previousMouseY, mouseX, mouseY);
				ctx.lineWidth = pencilSizeSlider.value();
				previousMouseX = mouseX;
				previousMouseY = mouseY;
			}
		}
		//if the user has released the mouse we want to set the previousMouse values 
		//back to -1.
		//try and comment out these lines and see what happens!
		else{
			previousMouseX = -1;
			previousMouseY = -1;
		}
	};

	//adds a button and click handler to the options area. 
	this.populateOptions = function() {
		select(".options").html(
			"<slider id='pencilThickness'>Pencil Thickness</slider>");
			pencilSizeSlider = createSlider(5,50,20);
			pencilSizeSlider.parent("pencilThickness");
	};
	
	//removes tool
	this.unselectTool = function(){
        updatePixels();
	    //clear options
        select(".options").html("");
	    pencilSizeSlider.remove();      
    };
}