/* Original Code:
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
 }); */

//Refactored Code:
var button = document.querySelector("button");

button.addEventListener("click", function(){
  document.body.classList.toggle("purple");
});
