// provide a buy recommendation using macd algo

// set crypto (from args) & hard code time period and backtrack perios
const myArgs = process.argv.slice(2);
crypto = myArgs[0];
time_period = myArgs[1]
backtracks = 3;


// setup functions
const slack = require("./helpers/slack-notification.js"); // slack notifications
const rsi = require("./helpers/check-rsi.js");  // check rsi indicator
const writeFile = require("./helpers/write-file.js"); // write file

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

  buy_indicator = rsi.fn_isOverbought_Recent(response.data[0].value, response.data[2].value)

  if(buy_indicator == true) {
    console.log(crypto + " has recently become overbought. sending notification");
    msg = crypto + "  has recently become obverbought : " + response.data[0].value;
    slack.fn_sendmessage(msg);
    writeFile.fn_writeShortOrder(crypto);
  }



})
.catch(function (error) {
  console.log(error.response.data);
});
