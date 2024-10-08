// Complete the function scramble(str1, str2) that returns true if a portion of str1 characters can be rearranged to match str2, otherwise returns false.

// Notes:

// Only lower case letters will be used (a-z). No punctuation or digits will be included.
// Performance needs to be considered.
// Examples
// scramble('rkqodlw', 'world') ==> True
// scramble('cedewaraaossoqqyt', 'codewars') ==> True
// scramble('katas', 'steak') ==> False


//SOLUTION
function scramble(str1, str2) {
    const charCount = {};
    for (let char of str1) {
        if (charCount[char]) {
            charCount[char]++;
        } else {
            charCount[char] = 1;
        }
    }
  
    for (let char of str2) {
        if (!charCount[char] || charCount[char] === 0) {
            return false;
        }
        charCount[char]--;
    }

    return true;
}
  
  console.log(scramble('rkqodlw','world'));