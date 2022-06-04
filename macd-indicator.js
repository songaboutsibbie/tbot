// macd


// set crypto and time period to run analysis on based on command line arguments
const crypto_lookup = require("./helpers/crypto-lookup.js");
const myArgs = process.argv.slice(2);
crypto = crypto_lookup.fn_crypto_lookup(myArgs[0]);
console.log('crypto to run analysis on is: ', crypto);
time_period = myArgs[1];
console.log('time period to run analysis on is: ', time_period);
bt_length = 18;
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
  
  
  //check for signal crossover buy indicator;

  console.log ("Starting MACD : " + response.data[0].valueMACD & "    starting MACD Signal : " + response.data[0].valueMACDSignal);
  if (response.data[0].valueMACD < response.data[0].valueMACDSignal) { bullStartingCondition = true; }

  console.log ("Finishing MACD : " + response.data[17].valueMACD & "    finishing MACD Signal : " + response.data[17].valueMACDSignal);
  if (response.data[17].valueMACD > response.data[17].valueMACDSignal) { bullFinishingCondition = true; }

  if (response.data[0].valueMACD < 0 && response.data[17].valueMACD > 0) { bullStrength = "Strong"; }

  if (bullStartingCondition == true && bullFinishingCondition == true) {
  	console.log("MACDADDY ALERT. BUY! BUY! BUY!");
  	console.log("Strength is : " + bullStrength);
  	console.log(response.data);
  }
})
.catch(function (error) {
  console.log(error.response.data);
});


