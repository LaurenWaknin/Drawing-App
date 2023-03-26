function StampStarTool(){
    
	//set an icon and a name for the object
	this.icon = "assets/star.jpg";
	this.name = "stampStarTool";

    var star = loadImage('assets/star.jpg');
    var starSizeSlider;
    var nStarSlider;
    var starSize
    var nStar
    
    this.draw = function()  
    {   
        if(mouseIsPressed){
            for(var i=0; i < nStarSlider.value(); i++){
            var starSize = starSizeSlider.value();
            var starX = random((mouseX - starSize/2)-10,(mouseX - starSize/2)+10);
            var starY = random((mouseY - starSize/2)-10,(mouseY - starSize/2)+10);
            image(star, starX, starY, starSize, starSize);
            }
        }   
    };

    //adds a button and click handler to the options area. 
    this.populateOptions = function() {
        select(".options")
        nStarSlider = createSlider(1,20,5); 
        nStar = createDiv('Number of Stars');     
        starSizeSlider = createSlider(5,50,20);
        starSize = createDiv('Star Size');
	};

    //removes tool
    this.unselectTool = function(){
	    //clear options
	    starSizeSlider.remove();
        nStarSlider.remove();
        nStar.remove();
        starSize.remove();
    };
};


