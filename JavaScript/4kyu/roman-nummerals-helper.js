// DESCRIPTION 
//Write two functions that convert a roman numeral to and from an integer value. Multiple roman numeral values will be tested for each function.

// Modern Roman numerals are written by expressing each digit separately starting with the left most digit and skipping any digit with a value of zero. In Roman numerals:

// 1990 is rendered: 1000=M, 900=CM, 90=XC; resulting in MCMXC
// 2008 is written as 2000=MM, 8=VIII; or MMVIII
// 1666 uses each Roman symbol in descending order: MDCLXVI.
// Input range : 1 <= n < 4000

// In this kata 4 should be represented as IV, NOT as IIII (the "watchmaker's four").

// Examples
// to roman:
// 2000 -> "MM"
// 1666 -> "MDCLXVI"
//   86 -> "LXXXVI"
//    1 -> "I"

// from roman:
// "MM"      -> 2000
// "MDCLXVI" -> 1666
// "LXXXVI"  ->   86
// "I"       ->    1


//SOLUTION
class RomanNumerals {
    static toRoman(num) {
      const numb = [
          { name: "M", values: 1000 },
          { name: "CM", values: 900 },
          { name: "D", values: 500 },
          { name: "CD", values: 400 },
          { name: "C", values: 100 },
          { name: "XC", values: 90 },
          { name: "L", values: 50 },
          { name: "XL", values: 40 },
          { name: "X", values: 10 },
          { name: "IX", values: 9 },
          { name: "V", values: 5 },
          { name: "IV", values: 4 },
          { name: "I", values: 1 },
      ];
      let result = [];
  
      for (let romanNum of numb) {
          let value = Math.floor(num / romanNum.values);
          while(value > 0) {
              result.push(`${romanNum.name}`);
              num -= romanNum.values;
              value-=1;
          }
      }
      return result.join('');
    }
  
    static fromRoman(str) {
      const romanNumeralMap = {
          'I': 1,
          'V': 5,
          'X': 10,
          'L': 50,
          'C': 100,
          'D': 500,
          'M': 1000
      };
      let integer = 0;
      for (let i = 0; i < str.length; i++) {
          const currentVal = romanNumeralMap[str[i]];
          const nextVal = romanNumeralMap[str[i + 1]];
  
          if (nextVal && currentVal < nextVal) {
              integer -= currentVal;
          } else {
              integer += currentVal;
          }
      }
  
      return integer;
  }
    }