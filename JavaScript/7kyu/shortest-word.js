// imple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.



function findShort(s) {
    return s.split(' ').map(word => word.length).reduce((minS, lengthS) => Math.min(minS, lengthS));
}