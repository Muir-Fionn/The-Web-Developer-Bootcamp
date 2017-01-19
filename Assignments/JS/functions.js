function kebabToSnake (str) {
 return str.replace(/-/g,"_");
}

function isEven(num){
 return num % 2 === 0;
}

function factorial(num) {
 var sum = 1;
 for(var i = num; i > 1; i--){
  sum *= i;
 }
 return sum;
}
