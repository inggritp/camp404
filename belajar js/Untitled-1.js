function multi(multiplier,...theArgs){
  return theArgs.map(function(element){
    return multiplier*element;
  });
}

var arr = multi(2,3,4,5,6);
console.log(arr);