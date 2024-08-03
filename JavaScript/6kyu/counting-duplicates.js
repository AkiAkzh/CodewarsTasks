// //Count the number of Duplicates
// Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

//SOLUTION
function duplicateCount(text) {
    text = text.toLowerCase();
    
    const charCount = {};
    
    for (let char of text) {
        if (charCount[char]) {
            charCount[char]++;
        } else {
            charCount[char] = 1;
        }
    }
    
    let duplicatesCount = 0;
    
    for (let char in charCount) {
        if (charCount[char] > 1) {
            duplicatesCount++;
        }
    }
    
    return duplicatesCount;
}