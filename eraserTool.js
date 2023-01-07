function EraserTool(){
    
    //set an icon and a name for the object
    this.icon = "assets/eraser.jpg";
    this.name = "eraserTool";
    
    this.draw = function(){

        if(mouseIsPressed){
            fill(255);
            noStroke();
            ellipse(mouseX,mouseY,eraserSizeSlider.value())
            loadPixels();
            updatePixels();
        }
        else{
           
        }
    };

    //adds a button and click handler to the options area. 
    this.populateOptions = function() {
		select(".options").html(
			"<slider id='sizeOfEraser'>Eraser Size</slider>");
			eraserSizeSlider = createSlider(5,100,20);
            eraserSizeSlider.parent("#sizeOfEraser");
	};

    //removes tool
    this.unselectTool = function(){
        updatePixels();
	    //clear options
	    eraserSizeSlider.remove();
    };
}