// DESCRIPTION

// Complete the solution so that the function will break up camel casing, using a space between words.

// Example
// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""

//SOLUTION

function solution(string) {
    let res = string.split('')
      for(let i=0; i < res.length; i++){
          if( 'A'<= res[i] && res[i] <= 'Z'){                   
              res[i] = " " +res[i];
          }
      }
      
      return res.join('')
  }