function myForEachArr(arr, func){
  //loop through array
  for(var i = 0; i < arr.length; i++){
    //call func for each item in array
    func(arr[i]);
  }
}

//obj.method() format

Array.prototype.myForEach = function(func){
  for(var i = 0; i < this.length; i++){
    //call func for each item in array
    func(this[i]);
  }
}
