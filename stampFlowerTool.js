function StampFlowerTool(){

	//set an icon and a name for the object
	this.icon = "assets/flower.jpg";
	this.name = "stampFlowerTool";

    var heart = loadImage('assets/flower.jpg');
    var flowerSizeSlider;
    var nFlowerSlider; 
    
    this.draw = function()  
    {   
        if(mouseIsPressed){
            for(var i=0; i < nFlowerSlider.value(); i++){
            var flowerSize = flowerSizeSlider.value();
            var flowerX = random((mouseX - flowerSize/2)-10,(mouseX - flowerSize/2)+10);
            var flowerY = random((mouseY - flowerSize/2)-10,(mouseY - flowerSize/2)+10);
            image(heart, flowerX, flowerY, flowerSize, flowerSize);
            }
        }   
    };

    //adds a button and click handler to the options area. 
    this.populateOptions = function() {
		select(".options").html(
			"<slider id='sizeOfFlowerControl'>Size of Flower</slider>")//;,
            //"<slider id='numberOfFlowersControl'>Number of Hearts</slider>");
            flowerSizeSlider = createSlider(5,50,20);
            flowerSizeSlider.parent("#sizeOfFlowerControl");
        select(".options").html(
            "<slider id='numberOfFlowersControl'>Number of Flowers</slider>");
            nFlowerSlider = createSlider(1,20,5);
            nFlowerSlider.parent("#numberOfFlowersControl");
	};

}