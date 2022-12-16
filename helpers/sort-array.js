// an asset price is convered overbought (due for a correction) when RSI is above 70 and oversold (due for a rebound) when it is below 30

function fn_sortArray(arr1, arr2) {

  var arr = [];  // Array to contain match elements
  for(var i=0 ; i<arr1.length ; ++i) {
    for(var j=0 ; j<arr2.length ; ++j) {
      if(arr1[i] == arr2[j]) {    // If element is in both the arrays
        arr.push(arr1[i]);        // Push to arr array
      }
    }
  }
   
  return arr;  // Return the arr elements
}

module.exports = { fn_sortArray } ;
