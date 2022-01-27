//Write a function that takes in a string and returns a boolean value whether or not the string contains a pair of matching brackets ({}, [], ()). These brackets must be nested appropriately in order to return a true value



var isValid = function(s) {
    const stack = [];
    const characters = { ')': '(', '}': '{', ']': '['};
  for (const char of s) {
        
      if (!characters[char]){
         stack.push(char); 
      } 
      else if (stack.pop() !== characters[char]){
          return false;
      } 
    }
    return stack.length === 0;
  };

isValid();



const isValid = function(s) {
    const stack = [];
    const closings = {
      '(': ')',
      '{': '}',
      '[': ']'
    };
    
    for (let i = 0; i < s.length; i += 1) {
      if (s[i] === '(' || s[i] === '{' || s[i] === '[') {
        stack.push(closings[s[i]])
        continue;
      }
      
      const requiredElement = stack.pop();
      
      if (s[i] !== requiredElement) return false;
    }
    
    if (stack.length > 0) return false;
    
    return true;
  };

  isValid();