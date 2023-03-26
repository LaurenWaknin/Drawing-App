function TriangleTool(){

	//set an icon and a name for the object
	this.icon = "assets/triangle.jpg";
	this.name = "triangleTool";

	const ctx = canvas.getContext('2d');

	var beginMouseX = -1;
	var beginMouseY = -1;
	var drawing = false;

	this.draw = function(){

		if(mouseIsPressed){
			if(beginMouseX == -1){
				ctx.lineWidth = triangleSizeSlider.value();
				beginMouseX = mouseX;
				beginMouseY = mouseY;
				drawing = true;
                noFill();
				loadPixels();
			}
			else{
				updatePixels();
                var x1 = beginMouseX;
                var y1 = beginMouseY;
                var x2 = ((2*beginMouseX)-mouseX);
                var y2 = (mouseY);
                var x3 = (mouseX);
                var y3 = (mouseY);
                triangle(x1, y1, x2, y2, x3, y3);
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
			"<slider id='triangleThickness'>Triangle Outline Thickness</slider>");
			triangleSizeSlider = createSlider(5,50,20);
			triangleSizeSlider.parent("triangleThickness");
	};

	//removes tool
	this.unselectTool = function(){
        updatePixels();
	    //clear options
        select(".options").html("");
	    triangleSizeSlider.remove();      
    };
}
