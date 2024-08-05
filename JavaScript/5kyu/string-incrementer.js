// Your job is to write a function which increments a string, to create a new string.

// If the string already ends with a number, the number should be incremented by 1.
// If the string does not end with a number. the number 1 should be appended to the new string.
// Examples:

// foo -> foo1

// foobar23 -> foobar24

// foo0042 -> foo0043

// foo9 -> foo10

// foo099 -> foo100

//SOLUTION

function incrementString (strng){
    let num = strng.match(/\d*$/)[0]; 
    let prefix = strng.slice(0, -num.length);
    if (num === "") {
        return strng + "1"; 
    }
    let incrementedNum = (parseInt(num) + 1).toString().padStart(num.length, '0'); 
    return prefix + incrementedNum;
}