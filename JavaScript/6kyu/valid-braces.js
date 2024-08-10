function validBraces(braces){
    const stack = [];
    const matchingBraces = {
      ')': '(',
      ']': '[',
      '}': '{'
    };
  
    for (let i = 0; i < braces.length; i++) {
      const current = braces[i];
  
      if (current === '(' || current === '[' || current === '{') {
        stack.push(current);
      } else if (current === ')' || current === ']' || current === '}') {
        if (stack.length === 0 || stack.pop() !== matchingBraces[current]) {
          return false;
        }
      }
    }
  
    return stack.length === 0;
  }