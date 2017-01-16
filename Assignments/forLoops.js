// Print all numbers between -10 and 19
console.log("Print all numbers between -10 and 19");
var i;
for(i = -10; i < 20; i++){
  console.log(i);
}

// Print all even numbers between 10 and 40
console.log("Print all even numbers between 10 and 40");
for(i = 10; i <= 40; i += 2){
  console.log(i);
}

// Print all odd numbers between 300 and 333
console.log("Print all odd numbers between 300 and 333");
for(i = 300; i <= 333; i++){
  if (i % 2 !== 0) {
    console.log(i);
  }
}

// Print all numbers divisible by 5 and 3 between 5 and 50
console.log("Print all numbers divisible by 5 and 3 between 5 and 50");
for(i = 5; i <= 50; i++){
  if(i % 3 === 0 && i % 5 === 0) {
    console.log(i);
  }
}

//Bonus problem set
console.log("Bonus:");

//Print all even numbers between 1 and 50
console.log("Even numbers between 1 and 50");
console.log("FOR");
for(i = 2; i <= 50; i += 2){
  console.log(i);
}
console.log("WHILE");
i = 2;
while (i <= 50) {
  console.log(i);
  i += 2;
}

//ASCII Art
console.log("ASCII art triangle");
var j, str = "";
for(i = 0; i < 6; i++){
  str = "";
  for(j = 0; j <= i; j++){
    str += "$";
  }
  console.log(str);
}

//FizzBuzz 1-100
console.log("Start of FizzBuzz");
for(i = 1; i <= 100; i++){
  if(i % 3 === 0 && i % 5 === 0){
    console.log("FizzBuzz");
  }else if (i % 3 === 0) {
    console.log("Fizz");
  }else if (i % 5 === 0) {
    console.log("Buzz");
  }else {
    console.log(i);
  }
}
