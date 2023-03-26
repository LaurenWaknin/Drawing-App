// Methods in drawing app

// https://app.slack.com/
let drawingProperties = {
    weight: 5,
    sliderValue: 15,
    colourInput: getRandomValue(),
    backgroundColour: "#fff3e2",
    startHelper: null,
 };
  
 // https:stackoverflow.com/questions/1484506/random-color-generator
function getRandomValue() {
    let letters = "0123456789ABCDEF";
    let colour = "#";
    for (let i = 0; i < 6; i++) {
      colour += letters[Math.floor(Math.random() * 16)];
    }
    return colour;
  }