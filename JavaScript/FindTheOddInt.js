function findOdd(A) {
    //happy coding!
    let result = 0;
    for (let i = 0; i < A.length; i++) {
      result ^= A[i];
    }
    return result;
  }

let array = [1,2,1];
console.log(findOdd(array)) // 2