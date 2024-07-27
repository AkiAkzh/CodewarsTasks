// DESCRIPTION:
// Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

// Examples:

// * 'abc' =>  ['ab', 'c_']
// * 'abcdef' => ['ab', 'cd', 'ef']


//SOLUTION

function solution(str){
    let arr=[];
    let j = 0;
    for(let i = 0; i<str.length ; i+=2){
        arr[j] = str[i];
        if(i+1 < str.length){
         arr[j] += str[i+1];
        }
        j++;
    }
    if(str.length % 2 != 0){
      j--;
      arr[j]=arr[j]+"_";
    }
    return arr;
  }

let gr = "abcdef";
console.log(solution(gr));