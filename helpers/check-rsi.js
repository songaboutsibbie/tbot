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
  console.log(data_array);
  //if(data_array[0].value < data_array[data_array.length].value) { return "downward"; }
  //else { return "upward";}
  return "whatever"

}

function fn_findLows(number) {
    // find lows
    let trend = null;
    var LocalLowArray = [];

    for (let i = 1; i < number.length; i++) {

        if (number[i] < number[i - 1]) {
          trend = "downward";
        }

        if ((number[i] > number[i - 1]) && trend == "downward") {
            trend = "upwards"
            LocalLowArray.push(number[i - 1]);
            console.log(number[i - 1] + " added to lower lows");
        }
    }
    return LocalLowArray;
}

function fn_detectLowerLows(numbers) {
    //  check if LowerLow is a downward trend or upward trend
    if (numbers.length < 2) {
        return null;
    }

    let uptrend = 0;
    let downtrend = 0;


    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > numbers[i - 1]) {
            uptrend++;

        } else if (numbers[i] < numbers[i - 1]) {
            downtrend++
        }
  }

  uptrend_percent = (uptrend / (uptrend + downtrend) ) * 100
  downtrend_percent = (downtrend / (uptrend + downtrend) ) * 100
  console.log("uptrend = " + uptrend_percent);
  console.log("downtrend = " + downtrend_percent);

}

module.exports = { fn_isOversold, fn_isOversold_Recent, fn_detectTrend, fn_findLows, fn_detectLowerLows } ;
