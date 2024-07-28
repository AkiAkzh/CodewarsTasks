// Description:
// Write Number in Expanded Form
// You will be given a number and you will need to return it as a string in Expanded Form. For example:

// expandedForm(12); // Should return '10 + 2'
// expandedForm(42); // Should return '40 + 2'
// expandedForm(70304); // Should return '70000 + 300 + 4'
// NOTE: All numbers will be whole numbers greater than 0.


//SOLUTION

function expandedForm(num) {
    let numStr = num.toString();
    let length = numStr.length;
    let array = [];
    let res= "";
    for (let i = 0; i < length; i++) {
        let digit = numStr[i];
        if (digit !== '0') {
            let placeValue = digit + '0'.repeat(length - i - 1);
            array.push(placeValue);
        }
    }
    for(let j=0; j<array.length; j++){
        res+= array[j];
        if(j<array.length-1){
            res +=" + ";
        } 
    }
    return res;
  }
  console.log(expandedForm(70304));