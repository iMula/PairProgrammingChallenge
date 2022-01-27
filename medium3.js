//Write a function that takes in two numbers and determines the largest positive integer that divides the two numbers without a remainder. 

function positiveInteger(x, y) {
    if ((typeof x !== 'number') || (typeof y !== 'number')) 
      return false;
    x = Math.abs(x);
    y = Math.abs(y);
    while(y) {
      var t = y;
      y = x % y;
      x = t;
    }
    return x;
  }
  
  console.log(positiveInteger(12, 13));
//   console.log(gcd_two_numbers(9, 3));


// function positiveInteger(num1, num2){
//     let result = Math.min(num1, num2);
//     return result; 
//   }
  
//   const numbers = positiveInteger(5, 10);
//   console.log(numbers)