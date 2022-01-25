//Write a JavaScript function that takes in a random array and outputs two new arrays of odd numbers and even numbers.

var arr = [1,2,3,4,5,6,7,8,9,10];
function groupNumbers(arr) {

    var evenNumbers = arr.filter(number => number % 2 == 0);
  
    console.log("Even numbers " + evenNumbers);
  
    var oddNumbers = arr.filter(number => number % 2 !== 0);
  
    console.log("Odd numbers " + oddNumbers);
  }
  
  groupNumbers(arr);











  