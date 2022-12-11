// an asset price is convered overbought (due for a correction) when RSI is above 70 and oversold (due for a rebound) when it is below 30

function fn_checkOverUnder(response) {
  //checks whether a given crypto is overbought or underbought
  if (resonse.data.value < 30 ) { 
    // crypto is due for a rebound
    return true;
  } else {
    return false;
  }
}

module.exports = { fn_checkOverUnder } ;
