function findUnique(arr) {
    arr.sort((a, b) => a - b);
    
    if (arr[0] !== arr[1]) {
        return arr[0];
    }
    
    return arr[arr.length - 1];
}

const numbers = [1, 1, 1, 2, 1, 1];
console.log(findUnique(numbers)); //  2