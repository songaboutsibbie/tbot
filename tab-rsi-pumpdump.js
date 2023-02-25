/* determines whether to take a short or long position after a pump or dump
   IF rsi pumped to overbought territory then take a short
   IF rsi dumped to oversold territory then take a long
*/


// set crypto (from args) & hard code time period and backtrack perios
const myArgs = process.argv.slice(2);
crypto = myArgs[0];
time_period = myArgs[1]  ; // default to 15
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

  order_score = 0;

  console.log("** Argument passed in is: " + crypto);
  console.log(response.data);

  if ( (response.data[0].value - response.data[2].value) > 20 ) {
    order_score = 50;  
    msg = crypto + " has recently pumped" ; console.log(msg); 
    if(response.data[0].value < 70) { 
      order_score = order_score + 25;
      msg = msg + " and has entered overbought territory.  RSI :  " +  response.data[0].value;
    }
  }

  if ( (response.data[0].value - response.data[2].value) < -20 ) {
    order_score = 50;
    msg = crypto + " has recently dumped" ; console.log(msg); 
    if(response.data[0].value < 30) { 
      order_score = order_score + 25;
      msg = msg + " and has entered oversold territory.  RSI :  " +  response.data[0].value;
    }
  }



  if(order_position > 50) {
    console.log("we have a position to take");
    msg = crypto + "  msg ";
    slack.fn_sendmessage(msg);
    //writeFile.fn_writeOrder(crypto);
  }



})
.catch(function (error) {
  console.log(error.response.data);
});
