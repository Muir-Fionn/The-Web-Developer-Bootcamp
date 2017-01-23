var toDos = [];
var input;

function list(){
  console.log("************");
  toDos.forEach(function(toDo, index){
    console.log(index + ": " + toDo.toUpperCase());
  })
  console.log("************");
}

function addToDo(){
  var added = prompt("Enter new To Do")
  toDos.push(added);
  console.log('"' + added.toUpperCase() + '" WAS ADDED.')
}

function deleteItem(){
  var index = prompt("Enter index of To Do to delte?");
  var removed = toDos.splice(index, 1);
  console.log('"' + removed[0].toUpperCase() + '" WAS DELETED.');
}

while(input !== "quit"){
  input = prompt("What would you like to do?");
  if(input === "list"){
    list();
  }else if (input === "new") {
    addToDo();
  }else if (input === "delete") {
    deleteItem();
  }
}

console.log("OKAY, YOU QUIT THE APP");
