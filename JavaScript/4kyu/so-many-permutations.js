//In this kata, your task is to create all permutations of a non-empty input string and remove duplicates, if present.

// Create as many "shufflings" as you can!

// Examples:

// With input 'a':
// Your function should return: ['a']

// With input 'ab':
// Your function should return ['ab', 'ba']

// With input 'abc':
// Your function should return ['abc','acb','bac','bca','cab','cba']

// With input 'aabb':
// Your function should return ['aabb', 'abab', 'abba', 'baab', 'baba', 'bbaa']
// Note: The order of the permutations doesn't matter.

// Good luck!
function permutations(string) {
    if (string.length === 1) return [string];

    const permute = (str) => {
        if (str.length <= 1) return [str];
        let allPermutations = [];
        for (let i = 0; i < str.length; i++) {
            const char = str[i];
            const remainingString = str.slice(0, i) + str.slice(i + 1);
            const remainingPermutations = permute(remainingString);
            for (let permutation of remainingPermutations) {
                allPermutations.push(char + permutation);
            }
        }
        return allPermutations;
    };

    const allPermutations = permute(string);
    return [...new Set(allPermutations)];
}