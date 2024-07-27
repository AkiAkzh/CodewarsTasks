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