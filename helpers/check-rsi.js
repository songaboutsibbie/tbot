// an asset price is convered overbought (due for a correction) when RSI is above 70 and oversold (due for a rebound) when it is below 30

function fn_isOversold(rsi_value) {
  //checks whether a given crypto is oversold
  if (rsi_value < 25 ) { return true; } 
  else { return false; }
}

function fn_isOversold_Recent(rsi_value_now, rsi_value_previous) {
  //checks whether a given crypto has become oversold in the last interval
  
  if(rsi_value_now < 25 && rsi_value_previous > 25) { return true; } 
  else { return false; }
}

module.exports = { fn_isOversold } ;
