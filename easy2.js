//Create a function that checks an array for prime numbers then inserts any primes into a new array. 

 

// function checkPrime(numArray) {
//     if (numArray <= 1) {
//         return false
//     }else {
//         for (let i = 2; i < numArray; i++) {
//             if (numArray % i == 0) {
//                 return false;
//             }
//         }
//         return true;
//     }
// }
// const isPrime = checkPrime(2);
// console.log(isPrime); // false

// numArray.forEach(function (element) {
//     const isPrime = checkPrime(element);
//     if (isPrime) {
//       console.log(`${element} is a prime number`);
//     } else {
//     }
//   });

numArray = [1, 2, 3, 4, 5, 6, 7, 8]
const isPrime = (numArray) => {
    for(let i = 2; i <= numArray/2; i++){
       if(numArray % i === 0){
          return false;
       }
    };
    return true;
 };
 const generatePrime = number => {
    const arr = [];
    let i = 2;
    while(arr.length < number){
       if(isPrime(i)){
          arr.push(i);
       };
       i = i === 2 ? i+1 : i+2;
    };
    return arr;
    
 };
 console.log(generatePrime(4));







