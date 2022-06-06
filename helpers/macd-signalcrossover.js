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

  return "very fast";
}

module.exports = { fn_recency, fn_rateOfIncrease } ;
