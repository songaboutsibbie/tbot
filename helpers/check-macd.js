function fn_checkCrossover(result, startPos, endPos) {
  //check whether the MACDHist was negative at start of results and positrive and end of reuslts indicating a crossover has occured
  //console.log("checking crossover : is " + result[endPos].result.valueMACDHist + " < 0  && " + result[startPos].result.valueMACDHist + " > 0");  // debug log

  if (result[endPos].result.valueMACDHist < 0 && result[startPos].result.valueMACDHist > 0) { return true; }
  else { return false ; }
   
}

// this function confirms that the value of MACD increases over time (array is sorted in reverse chronological order)
function fn_checkTrend(result, startPos, endPos) {  
  //console.log("checking trend with endPos of " + endPos + " and startPos of " + startPos);  // debug log
  trend = false;

  for (let i=endPos; i > startPos; i--) {
    //console.log("checking whether " + result[i].result.valueMACD + " < " + result[i-1].result.valueMACD); // debug log
    if (Number(result[i].result.valueMACD) < Number(result[i-1].result.valueMACD)) {  trend = true ; } 
    else { trend = false ; i = i-100; }
  }

  //console.log("Trend set to : " + trend); // debug log
  return trend;
}

function fn_checkIncreaseRate(result, startPos, endPos) {  
  totalIncrease = result[startPos].valueMACD - result[endPos].valueMACD;
  averageIncrease = totalIncrease / (endPos - startPos);
  rateOfIncrease = (averageIncrease / totalIncrease ) * 100;

  return rateOfIncrease;
}

module.exports = { fn_checkCrossover, fn_checkTrend, fn_checkIncreaseRate } ;
