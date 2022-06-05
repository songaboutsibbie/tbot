// provide a buy recommendation using macd algo

// set crypto and time period to run analysis on based on command line arguments

const myArgs = process.argv.slice(2);
crypto = myArgs[0];
time_period = "4h"
bt_length = 12; // 3 days using 4h time period

console.log('crypto to run analysis on is: ', crypto);
console.log('time period to run analysis on is: ', time_period);
console.log("going back " + bt_length);


var axios = require('axios');
var bullStartingCondition = false;
var bullFinishingCondition = false;
var bullStrength = "average";

axios.get('https://api.taapi.io/macd', {
  params: {
    secret: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNvbmdhYm91dHNpYmJpZUBnbWFpbC5jb20iLCJpYXQiOjE2NTA2Nzg1MjEsImV4cCI6Nzk1Nzg3ODUyMX0.kB2EUss32pvD6D3Nv6pg92-ziJ_phjX722Qqx_eHbtU",
    exchange: "binance",
    symbol: crypto,
    interval: time_period,
    backtracks: bt_length,
  }
})
.then(function (response) {
  
  // starting conditions are a) MACD below signal line at start of time period & MACD has risen above signal in most recent time period
  console.log(response.data);
  console.log(esponse.data[bt_length-1].valueMACD);
  console.log(response.data[bt_length-1].valueMACDSignal);
  console.log(esponse.data[0].valueMACDHist);
  
  if (response.data[bt_length-1].valueMACD < response.data[bt_length-1].valueMACDSignal && response.data[0].valueMACDHist) {
    console.log("conditions are true");
  }
 /*
  if (response.data.valueMACDHist > 0) { 
    console.log("BUY!  Histogram value = " + response.data.valueMACDHist); 
  }
  else if (response.data.valueMACDHist < 0) { console.log("SELL!  Histogram value = " + response.data.valueMACDHist); }
  */

})
.catch(function (error) {
  console.log(error.response.data);
});


