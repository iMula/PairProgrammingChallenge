//Write a function that takes in a string and returns a boolean value whether or not the string contains a pair of matching brackets ({}, [], ()). These brackets must be nested appropriately in order to return a true value


function brackets(str){
 
  str = str.replace(/[^{}()[\]]+/g, "");
  if(str === "{}" || str === "[]" || str === "()"){
      return true;
  }
  else{
      return false;
  }
}

str = "[Hello .world]";
console.log(brackets(str));