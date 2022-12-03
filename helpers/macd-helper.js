function fn_checkCrossover(result, startPos, endPos) {
  //check whether the MACDHist was negative at start of results and positrive and end of reuslts indicating a crossover has occured
  console.log("checking crossover : is " + result[endPos].result.valueMACDHist + " < " + result[startPos].result.valueMACDHist);

  if (result[endPos].result.valueMACDHist < 0 && result[startPos].result.valueMACDHist > 0) { return true; }
  else { return false ; }
   
}

// this function confirms that the value of MACD increases over time (array is sorted in reverse chronological order)
function fn_checkTrend(result, startPos, endPos) {
  console.log("endPos :" + endPos + " -- startPos :" + startPos);  // debug comments
s
  for (let i=endPos; i < startPos+1; i--) {
    console.log("MACD value " + result[i].result.valueMACD)
    if (result[i].result.valueMACD < result[i-1].result.valueMACD) {  trend = true } else { trend = false }
  }

  return trend;
}

function fn_recency(result) {
  // determine at what point the signal line cross over occured
  for (let i=0; i < result.result.length; i++) { 
    if (result[i].result.valueMACD > result[i].result.valueMACDSignal) { 
      recency = i+1;
    }  
  }
  //console.log("*** cross over happened " + recency + " time periods ago");
  return recency;
}


function fn_rateOfIncrease(result) {
  var lowPoint = result[0].result.valueMACD;

  // find the point at which MACD was at its lowest value.  
  for (let i=0; i < result.result.length; i++) { 
    if (result[i].result.valueMACD < lowPoint) { lowPoint = result[i].result.valueMACD; lowPointPosition = i+1; }  
  }
  
  // Calculate the total increase between lowest MACD value and most recent MACD Value
  totalIncrease = result[i].result.valueMACD - lowPoint;

  // Calculate the average increase
  averageIncrease = totalIncrease / lowPointPosition;

  // Calculate ther rate of increase as a percentage
  rateOfIncrease = (averageIncrease / totalIncrease ) * 100;

  //console.log("Low Point is : " + lowPoint);
  //console.log("Low Point Position is : " + lowPointPosition);
  //console.log("Total Increase " + totalIncrease);
  // console.log("Average Increase " + averageIncrease);
  // just some random comments
  return rateOfIncrease;
}

module.exports = { fn_recency, fn_rateOfIncrease, fn_checkCrossover, fn_checkTrend } ;
