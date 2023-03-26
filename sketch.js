//global variables that will store the toolbox colour palette
//amnd the helper functions
var toolbox = null;
var colorP = null;

function setup() {

	//create a canvas to fill the content div from index.html
	canvasContainer = select('#content');
	var c = createCanvas(canvasContainer.size().width, canvasContainer.size().height);
	c.parent("content");

	//create helper functions and the colour palette
	helpers = new HelperFunctions();
	colorP = new ColorPalette();

	//create a toolbox for storing the tools
	toolbox = new Toolbox();

	//add the tools to the toolbox.
	toolbox.addTool(new FreehandTool());
	toolbox.addTool(new LineToTool());
	toolbox.addTool(new SprayCanTool());
	toolbox.addTool(new MirrorDrawTool());
	toolbox.addTool(new CircleTool());
	toolbox.addTool(new RectangleTool());
	toolbox.addTool(new TriangleTool());
	toolbox.addTool(new StampStarTool());
	toolbox.addTool(new StampHeartTool());
	toolbox.addTool(new StampFlowerTool());
	toolbox.addTool(new EraserTool());
	background(255);

}

function draw() {
	//call the draw function from the selected tool.
	//hasOwnProperty is a javascript function that tests
	//if an object contains a particular method or property
	//if there isn't a draw method the app will alert the user
	if (toolbox.selectedTool.hasOwnProperty("draw")) {
		toolbox.selectedTool.draw();
	} else {
		alert("it doesn't look like your tool has a draw method!");
	}
}