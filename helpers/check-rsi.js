// an asset price is convered overbought (due for a correction) when RSI is above 70 and oversold (due for a rebound) when it is below 30

function fn_checkOverUnder(rsi_value) {
  //checks whether a given crypto is overbought or underbought
  if (rsi_value < 30 ) { 
    // crypto is due for a rebound
    return "oversold";
  } else {
    return "not oversold";
  }
}

module.exports = { fn_checkOverUnder } ;
