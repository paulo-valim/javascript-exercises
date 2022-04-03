const removeFromArray = function(myArray, item) {
  let position;
  
  for (let i = 1; i < arguments.length; i++) {
    position = myArray.indexOf(arguments[i]);
    
    if (position >= 0) {
    myArray.splice(position, 1);
    } 
  }
  
return myArray;

}

// Do not edit below this line
module.exports = removeFromArray;