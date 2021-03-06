function fn_recency(response) {
  // determine at what point the signal line cross over occured
  for (let i=0; i < response.data.length; i++) { 
    if (response.data[i].valueMACD > response.data[i].valueMACDSignal) { 
      recency = i+1;
    }  
  }
  //console.log("*** cross over happened " + recency + " time periods ago");
  return recency;
}


function fn_rateOfIncrease(response) {
  var lowPoint = response.data[0].valueMACD;

  // find the point at which MACD was at its lowest value.  
  for (let i=0; i < response.data.length; i++) { 
    if (response.data[i].valueMACD < lowPoint) { lowPoint = response.data[i].valueMACD; lowPointPosition = i+1; }  
  }
  
  // Calculate the total increase between lowest MACD value and most recent MACD Value
  totalIncrease = response.data[0].valueMACD - lowPoint;

  // Calculate the average increase
  averageIncrease = totalIncrease / lowPointPosition;

  // Calculate ther rate of increase as a percentage
  rateOfIncrease = (averageIncrease / totalIncrease ) * 100;

  //console.log("Low Point is : " + lowPoint);
  //console.log("Low Point Position is : " + lowPointPosition);
  //console.log("Total Increase " + totalIncrease);
  // console.log("Average Increase " + averageIncrease);
  return rateOfIncrease;
}

module.exports = { fn_recency, fn_rateOfIncrease } ;
