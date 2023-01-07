function StampHeartTool(){

	//set an icon and a name for the object
	this.icon = "assets/heart.jpg";
	this.name = "stampHeartTool";

    var heart = loadImage('assets/heart.jpg');
    var heartSizeSlider;
    var nHeartSlider; 
    
    this.draw = function()  
    {   
        if(mouseIsPressed){
            for(var i=0; i < nHeartSlider.value(); i++){
            var heartSize = heartSizeSlider.value();
            var heartX = random((mouseX - heartSize/2)-10,(mouseX - heartSize/2)+10);
            var heartY = random((mouseY - heartSize/2)-10,(mouseY - heartSize/2)+10);
            image(heart, heartX, heartY, heartSize, heartSize);
            }
        }   
    };

    //adds a button and click handler to the options area. 
    this.populateOptions = function() {
		select(".options").html(
			"<slider id='sizeOfHeartControl'>Size of heart</slider>")//;,
            //"<slider id='numberOfHeartsControl'>Number of Hearts</slider>");
            heartSizeSlider = createSlider(5,50,20);
            heartSizeSlider.parent("#sizeOfHeartControl");
        select(".options").html(
            "<slider id='numberOfHeartsControl'>Number of Hearts</slider>");
            nHeartSlider = createSlider(1,20,5);
            nHeartSlider.parent("#numberOfHeartsControl");
	};

}