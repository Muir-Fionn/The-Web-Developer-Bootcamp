var button = document.querySelector("button");
var body = document.querySelector("body");
var isPurple = false;

button.addEventListener("click", function(){
  if(isPurple){
    body.classList.remove("purple");
  }else {
    body.classList.add("purple");
  }
  isPurple = !isPurple;
});
