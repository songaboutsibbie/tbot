// provide a buy recommendation using macd algo

// set crypto (from args) & hard code time period and backtrack perios
const myArgs = process.argv.slice(2);
crypto = myArgs[0];
time_period = myArgs[1]
backtracks = 8; // 2 hours using 15 min time period


// setup slack notifications
const slack = require("./helpers/slack-notification.js");

// import macd helper functions
const rsi = require("./helpers/check-rsi.js");

// retrieve macd indicators from taapi
var axios = require('axios');
axios.get('https://api.taapi.io/rsi', {
  params: {
    secret: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjbHVlIjoiNjI2MzVhZjk0MjI0NmNlM2IwNGMzNDJkIiwiaWF0IjoxNjcwMjI5MzYwLCJleHAiOjMzMTc0NjkzMzYwfQ.QVROcNEXCK41L_4-9kcq3RB06s3L0mfFq4ir2MdcTlY",
    exchange: "binance",
    symbol: crypto,
    interval: time_period,
    backtracks: backtracks,
  }
})
.then(function (response) {

  console.log("** Argument passed in is: " + crypto);
  console.log(response.data);
  //rsi.fn_checkOverUnder(response)
  console.log("result is: " + rsi.fn_checkOverUnder(response.data[0]) );

  


})
.catch(function (error) {
  console.log(error.response.data);
});
