function fn_recency(response) {

  for (let i=0; i < response.data.length; i++) { 
    if (response.data[i].valueMACD > response.data[i].valueMACDSignal) { 
      recency = i+1;
    }  
  }
  console.log("*** cross over happened " + recency + " time periods ago");
  return recency;
}


function fn_rateOfIncrease(response) {
  var lowPoint = response.data[0].valueMACD;
  for (let i=0; i < response.data.length; i++) { 
    if (response.data[i].valueMACD < lowPoint) { lowPoint = response.data[i].valueMACD; lowPointPosition = i+1; }  
  }
  
  console.log("Low Point is : " + lowPoint);
  console.log("Low Point Position is : " + lowPointPosition);

  totalIncrease = response.data[0].valueMACD - lowPoint;
  console.log("Total Increase " + totalIncrease);

  averageIncrease = totalIncrease / lowPointPosition;
  console.log("Average Increase " + averageIncrease);

  rateOfIncrease = (averageIncrease / totalIncrease ) * 100;

  return rateOfIncrease;
}

module.exports = { fn_recency, fn_rateOfIncrease } ;
