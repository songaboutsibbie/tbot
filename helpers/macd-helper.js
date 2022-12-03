function fn_checkCrossover(result, startPos, endPos) {
  //check whether the MACDHist was negative at start of results and positrive and end of reuslts indicating a crossover has occured
  console.log("checking crossover : is " + result[endPos].result.valueMACDHist + " < 0  && " + result[startPos].result.valueMACDHist + " > 0");  // debug

  if (result[endPos].result.valueMACDHist < 0 && result[startPos].result.valueMACDHist > 0) { console.log("crossover true") ; return true; }
  else { console.log("Crossover set to : false") ; return false ; }
   
}

// this function confirms that the value of MACD increases over time (array is sorted in reverse chronological order)
function fn_checkTrend(result, startPos, endPos) {  
  console.log("checking trend with endPos of " + endPos + " and startPos of " + startPos);  // debug comments
  trend = false;

  for (let i=endPos; i > startPos; i--) {
    console.log("checking whether " + result[i].result.valueMACD + " < " + result[i-1].result.valueMACD + "?");
    if (Number(result[i].result.valueMACD) < Number(result[i-1].result.valueMACD)) {  trend = true ; } 
    else { trend = false ; i = i-100; }
  }

  console.log("Trend set to : " + trend);
  return trend;
}


module.exports = { fn_checkCrossover, fn_checkTrend } ;
