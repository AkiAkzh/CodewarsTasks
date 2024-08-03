// This time no story, no theory. The examples below show you how to write function accum:

// Examples:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from a..z and A..Z.

//SOLUTION
function accum(s) {
    s = s.toLowerCase();
    let text ="";
      let res = [];
    for(let i = 0; i< s.length; i++){
      text += s[i].toUpperCase();
      for(let j = 0; j < i; j++){
        text += s[i];
      }
      res.push(text);
      text = "";
    }
    return res.join("-");
  }