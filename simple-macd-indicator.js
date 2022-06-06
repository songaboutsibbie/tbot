// provide a buy recommendation using macd algo

// set crypto (from args) & hard code time period and backtrack perios
const myArgs = process.argv.slice(2);
crypto = myArgs[0];
time_period = "4h"
bt_length = 12; // 3 days using 4h time period

// setup slack notifications
const slack = require("./helpers/slack-notification.js");

// import macd helper functions
const macd_sigcros = require("./helpers/macd-signalcrossover.js");

// retrieve macd indicators from taapi
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
  console.log("** Running analysis on " + crypto + " going back " + bt_length + " time periods of " + time_period);
  if (response.data[11].valueMACD < response.data[11].valueMACDSignal && response.data[0].valueMACDHist > 0) {
    console.log("\n ** Detected signal cross over.  checking when it happened");

    // check recency and only
    recency = macd_sigcros.fn_recency(response);
    console.log("** Cross over occured "+ recency + " time periods ago.  Buy trigger happens at less 6");

    // check sharpness of upturn
    rateOfIncrease = macd_sigcros.fn_rateOfIncrease(response);
    console.log("** Rate of increase (%) : " + rateOfIncrease + "%.  Buy trigger happens at greater than 7%");

    // check how far from 0 line it is
    // fn_macd_zerolineposition

    // send slack message only if recency and sharpness are of a high enough rating
    if(recency < 6 && rateOfIncrease > 7) {
      msg = "Buy " + crypto + "  :  MACD signal crossover occured " + recency + " time periods ago";
      slack.fn_sendmessage(msg);
    }
  }




})
.catch(function (error) {
  console.log(error.response.data);
});


