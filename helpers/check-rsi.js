// an asset price is convered overbought (due for a correction) when RSI is above 70 and oversold (due for a rebound) when it is below 30

function fn_isOversold(rsi_value) {
  //checks whether a given crypto is oversold
  if (rsi_value < 35 ) { return true; } 
  else { return false; }
}

function fn_isOversold_Recent(rsi_value_now, rsi_value_previous) {
  //checks whether a given crypto has become oversold in the last interval
  
  if(rsi_value_now < 25 && rsi_value_previous > 25) { return true; } 
  else { return false; }
}

function fn_detectTrend(data_array) {
  if (Number(data_array[0].value) > Number(data_array[data_array.length - 1].value) ) { return "downward"; }
  else { return "upward";}
}

function fn_findLows(numbers) {
  // find lows
  let trend = null;
  var LocalLowArray = [];

  for (let i = 1; i < numbers.length; i++) {

      if (Number(numbers[i]) < Number(numbers[i - 1])) {
        trend = "downward";
        console.log("trend downward")
      }

      if (( Number(numbers[i]) > Number(numbers[i - 1]) ) && trend == "downward") {
          trend = "upwards"
          LocalLowArray.push(numbers[i - 1]);
          console.log(numbers[i - 1] + " added to lower lows");
      }
  }
  return LocalLowArray;
}

function fn_detectLowerLows(numbers) {
  //  check if LowerLow is a downward trend or upward trend
  if (numbers.length < 2) {
      return null;
  }

  let LowestLow = numbers[0];
  let LowerLowCount = 0;

  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] < LowestLow) {
      LowestLow = numbers[i];
      LowestLowCount++;
    } 
  }
  return LowestLowCount;
}

function fn_detectHigherLows(numbers) {
  //  check if LowerLow is a downward trend or upward trend
  if (numbers.length < 2) {
      return null;
  }

  let HighestLow = numbers[0];
  let HigherLowCount = 0;

  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > HighestLow) {
      HighestLow = numbers[i];
      HigherLowCount++;
    } 
  }
  return LowestLowCount;
}

module.exports = { fn_isOversold, fn_isOversold_Recent, fn_detectTrend, fn_findLows, fn_detectLowerLows, fn_detectHigherLows } ;
