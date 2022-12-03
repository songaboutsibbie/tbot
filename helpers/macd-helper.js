function fn_checkCrossover(result) {
  //check whether the MACDHist was negative at start of results and positrive and end of reuslts indicating a crossover has occured
  console.log("checking crossover : " + result[2].result.valueMACDHist + " > " + result[0].result.valueMACDHist);

  if (result[2].result.valueMACDHist < 0 && result[0].result.valueMACDHist > 0) { return true; }
  else { return false ; }
   
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

module.exports = { fn_recency, fn_rateOfIncrease, fn_checkCrossover } ;
