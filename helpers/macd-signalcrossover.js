function fn_recency(response) {

  for (let i=0; i < response.data.length; i++) { 
    if (response.data[i].valueMACD > response.data[i].valueMACDSignal) { 
      recency = i+1;
      conseole.log("true");
    }
    console.log("cross over happened " + recency + " time periods ago");
    return recency;
  }

}

module.exports = { fn_recency } ;
