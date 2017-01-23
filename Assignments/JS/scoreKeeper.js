var p1Button = document.querySelector("#p1");
var p2Button = document.querySelector("#p2");
var resetButton = document.querySelector("#reset");
var p1Display = document.querySelector("#p1Display");
var p2Display = document.querySelector("#p2Display");
var maxInput = document.querySelector("input");
var maxDisplay = document.querySelector("p span");
var gameOn = true;
var p1Score = 0;
var p2Score = 0;
var maxScore = 5;

p1Button.addEventListener("click", function(){
  if(gameOn){
    p1Score++;
    p1Display.textContent = p1Score;
    if(p1Score === maxScore){
      gameOn = false
      p1Display.classList.add("winner");
    }
  }
});

p2Button.addEventListener("click", function(){
  if(gameOn){
    p2Score++;
    p2Display.textContent = p2Score;
    if(p2Score === maxScore){
      gameOn = false
      p2Display.classList.add("winner");
    }
  }
});

resetButton.addEventListener("click", reset);

maxInput.addEventListener("change", function(){
  maxScore = Number(this.value);
  maxDisplay.textContent = maxScore;
  reset();
})

function reset(){
  gameOn = true;
  p1Score = 0;
  p2Score = 0;
  p1Display.textContent = p2Score;
  p2Display.textContent = p1Score;
  p1Display.classList.remove("winner");
  p2Display.classList.remove("winner");
}
