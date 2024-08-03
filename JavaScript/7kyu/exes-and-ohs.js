// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

// Examples input/output:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false


//SOLUTION
function XO(str) {
    // Convert the string to lowercase
    str = str.toLowerCase();
    
    // Count occurrences of 'x' and 'o'
    const xCount = (str.match(/x/g) || []).length;
    const oCount = (str.match(/o/g) || []).length;
    
    // Return true if counts are equal, false otherwise
    return xCount === oCount;
  }