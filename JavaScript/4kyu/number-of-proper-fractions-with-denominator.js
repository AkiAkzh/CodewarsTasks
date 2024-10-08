//DESCRIPTION
// If n is the numerator and d the denominator of a fraction, that fraction is defined a (reduced) proper fraction if and only if GCD(n,d)==1.

// For example 5/16 is a proper fraction, while 6/16 is not, as both 6 and 16 are divisible by 2, thus the fraction can be reduced to 3/8.

// Now, if you consider a given number d, how many proper fractions can be built using d as a denominator?

// For example, let's assume that d is 15: you can build a total of 8 different proper fractions between 0 and 1 with it: 1/15, 2/15, 4/15, 7/15, 8/15, 11/15, 13/15 and 14/15.

// You are to build a function that computes how many proper fractions you can build with a given denominator:

// properFractions(1)==0
// properFractions(2)==1
// properFractions(5)==4
// properFractions(15)==8
// properFractions(25)==20


//SOLUTION
function properFractions(n){
    let result = n;
    if (n===1){return 0;}
      for (let p = 2; p * p <= n; p++) {
          if (n % p === 0) {
              while (n % p === 0) {
                  n = Math.floor(n / p);
              }
              result -= Math.floor(result / p);
          }
      }
    
      if (n > 1) {
          result -= Math.floor(result / n);
      }
  
      return result;
  }
  function gcd(a, b) {
      while (b !== 0) {
          const temp = b;
          b = a % b;
          a = temp;
      }
      return a;
  }
  
  function countProperFractions(d) {
      if (d <= 1) return 0;
      return eulerTotient(d);
  }