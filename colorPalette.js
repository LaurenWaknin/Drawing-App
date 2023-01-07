//https://iro.js.org/guide.html

function ColorPalette() {

  this.colorPicker = new iro.ColorPicker(".picker", {
    // Set the size of the color picker
    width: 100,
    height: 50,
    // Set the initial color
    color: "rgb(255, 0, 0)",
    // Set border
    borderWidth: 1,
    borderColor: "#fff",
    layout: [
      {
        component: iro.ui.Wheel,
      },
      {
        component: iro.ui.Slider,
        options: {
          sliderSize: 10,
        },
      },
    ],
  });

  this.loadColours = function () {
    // listen to a color picker's color:change event
    // color:change callbacks receive the current color
    fill(drawingProperties.colourInput);
    stroke(drawingProperties.colourInput);

    // create a callback function
    this.colorPicker.on("input:change", function (color) {
      drawingProperties.colourInput = color.hexString;
      fill(drawingProperties.colourInput);
      stroke(drawingProperties.colourInput);
    });
  };

  this.loadColours();
};
