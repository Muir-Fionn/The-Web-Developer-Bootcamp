//DOM Variables
var colors, pickedColor, size = 6;
var squares = document.querySelectorAll(".square");
var displayColor = document.getElementById('colorDisplay');
var messageDisplay = document.querySelector("#message");
var header = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var stateButtons = document.querySelectorAll(".btn")

init();

function init(){
  setStateButtons()
  setSquares();
  setBoard();
  resetButton.addEventListener("click", function(){
    setBoard();
  });
}

function setStateButtons(){
  stateButtons.forEach(function(btn){
    btn.addEventListener("click", function(){
    	this.textContent === "Easy" ? size = 3: size = 6;
      stateButtons.forEach(function(btn){
      	btn.classList.toggle("selected");
      });
      setBoard();
    });
  });
}

function setSquares(){
  squares.forEach(function(btn){
    btn.addEventListener("click", function(){
      //grab color of clicked square
      var clickedColor = this.style.background;
      //compare to color of pickedColor
      if (clickedColor === pickedColor) {
        messageDisplay.textContent = "Correct!";
        changeColors(pickedColor);
        header.style.background = pickedColor;
        resetButton.textContent = "Play Again?"
      }else {
        this.style.background = "#232323";
        messageDisplay.textContent = "Try Again";
      }
    })
  });
}

function setBoard(){
  colors = fillColors(size);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  header.style.background = "steelblue";
  resetButton.textContent = "New Colors"
  messageDisplay.textContent = "";
  fillSquares();
}

function fillColors(size) {
  var arr = [];
  for (var i = 0; i < size; i++) {
    arr.push(makeColor());
  }
  return arr;
}

function pickColor(){
  var pick = Math.floor(Math.random() * colors.length)
  return colors[pick];
}

function fillSquares(){
  for (var i = 0; i < squares.length; i++) {
    if (colors[i]) {
      squares[i].style.display = "block";
      squares[i].style.background = colors[i];
    }else {
      squares[i].style.display = "none";
    }
  }
}

function changeColors(color){
  for (var i = 0; i < squares.length; i++) {
    squares[i].style.background = color;
  }
}

function makeColor(){
  var color = "rgb("
  var value = Math.floor(Math.random() * 256)
  color += value + ", "
  var value = Math.floor(Math.random() * 256)
  color += value + ", "
  var value = Math.floor(Math.random() * 256)
  color += value + ")";
  return color;
}
