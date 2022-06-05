// provide a buy recommendation using macd algo

// set crypto and time period to run analysis on based on command line arguments

const myArgs = process.argv.slice(2);
crypto = myArgs[0];
time_period = "4h"
bt_length = 12; // 3 days using 4h time period

console.log("running analysis on " + crypto + "going back " + bt_length + " time periods of " + time_period);

const macd_sigcros = require("./helpers/macd-signalcrossover.js");

var axios = require('axios');

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
  console.log(response.data[11].valueMACD);
  console.log(response.data[11].valueMACDSignal);
  console.log(response.data[0].valueMACDHist);
  
  if (response.data[11].valueMACD < response.data[11].valueMACDSignal && response.data[0].valueMACDHist > 0) {
    console.log("detected signal cross over.  checking when it happened\n");

    // check recency and only
    macd_sigcros.fn_recency(response);

    // check sharpness of upturn
    // fn_macd_rateofchange

    // check how far from 0 line it is
    // fn_macd_zerolineposition

    // send slack message only if recency and sharpness are of a high enough rating
    // code here
  }

})
.catch(function (error) {
  console.log(error.response.data);
});


