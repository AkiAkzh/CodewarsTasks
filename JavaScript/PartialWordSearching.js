function wordSearch(query, arr) {
    const lowquery = query.toLowerCase();
    const result = arr.filter(str => str.toLowerCase().includes(lowquery));
    return result.length > 0 ? result : ["Empty"];
  }
  
let k = ["za", "ab", "abc", "zab", "zbc"];
console.log(wordSearch("aB", k))