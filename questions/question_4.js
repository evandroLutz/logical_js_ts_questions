//## 4) Balanced Brackets
//Write an efficient method that tells us whether or not an input string brackets (`{`, `}`, `(`, `)`, `[`, `]`) are opened and closed properly.  

//**Examples:**  
//- `{[]}` => `true`  
//- `{(])}` => `false`  
//- `{([)]}` => `false`  

function isBalancedBrackets(string) {
  const stack = [];
  const pairs = {
    ')': '(',
    '}': '{',
    ']': '['
  };

  for (let char of string) {
    if (char === '(' || char === '{' || char === '[') {
      stack.push(char); // push opening bracket
    } else if (char === ')' || char === '}' || char === ']') {
      if (stack.pop() !== pairs[char]) {
        return false; // closing bracket does not match the top
      }
    }
  }

  return stack.length === 0; // if anything remains in the stack, it's not balanced
}

// Tests
console.log(isBalancedBrackets('{[]}'));    // true
console.log(isBalancedBrackets('{(])}'));   // false
console.log(isBalancedBrackets('{([)]}'));  // false
console.log(isBalancedBrackets('(([]){})')); // true
console.log(isBalancedBrackets('([{}])'));   // true
console.log(isBalancedBrackets('((())'));    // false
console.log(isBalancedBrackets('())'));     // false