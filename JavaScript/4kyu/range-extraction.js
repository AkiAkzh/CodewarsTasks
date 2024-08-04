// A format for expressing an ordered list of integers is to use a comma separated list of either

// individual integers
// or a range of integers denoted by the starting integer separated from the end integer in the range by a dash, '-'. The range includes all integers in the interval including both endpoints. It is not considered a range unless it spans at least 3 numbers. For example "12,13,15-17"
// Complete the solution so that it takes a list of integers in increasing order and returns a correctly formatted string in the range format.


function solution(list) {
    let result = '';
    let start = list[0];
    let end = start;
  
    for (let i = 1; i <= list.length; i++) {
      if (list[i] === end + 1) {
        end = list[i];
      } else {
        if (end - start >= 2) {
          result += `${start}-${end},`;
        } else {
          for (let j = start; j <= end; j++) {
            result += `${j},`;
          }
        }
        start = list[i];
        end = start;
      }
    }
  
    return result.slice(0, -1);
  }
  
  