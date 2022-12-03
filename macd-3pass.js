// determine whether to provide a buy recommendation for a given crypto symbol based on the macd indicator

// set variables
const myArgs = process.argv.slice(2);
crypto = myArgs[0];  // crypto symbols pulled from arguments
indicator_score = 0;  // the higher the score the more likely the symbol will increase in value

// setup slack notifications
const slack = require("./helpers/slack-notification.js");

// import macd helper functions
const macd_helper = require("./helpers/macd-helper.js");

// Require taapi: npm i taapi --save
const taapi = require("taapi");
 
// Setup client with authentication
const client = taapi.client("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNvbmdhYm91dHNpYmJpZUBnbWFpbC5jb20iLCJpYXQiOjE2NTA2Nzg1MjEsImV4cCI6Nzk1Nzg3ODUyMX0.kB2EUss32pvD6D3Nv6pg92-ziJ_phjX722Qqx_eHbtU");

// Init bulk queries. This resets all previously added queries
client.initBulkQueries();


// retrieve 4 macd data points across three different interval sets
client.addBulkQuery("macd", "binance", crypto, "15m");
client.addBulkQuery("macd", "binance", crypto, "15m", null, 1); 
client.addBulkQuery("macd", "binance", crypto, "15m", null, 2);
client.addBulkQuery("macd", "binance", crypto, "4h");
client.addBulkQuery("macd", "binance", crypto, "4h", null, 1);
client.addBulkQuery("macd", "binance", crypto, "4h", null, 2);
client.addBulkQuery("macd", "binance", crypto, "1d");
client.addBulkQuery("macd", "binance", crypto, "1d", null, 1);
client.addBulkQuery("macd", "binance", crypto, "1d", null, 2);

client.executeBulkQueries().then(result => {
  console.log("** Argument passed in is: " + crypto);
  console.log(result);
  console.log(result[0].result.valueMACD);

  // set start and finish positions of each macd interval type
  startPos15m = 0; endPos15m = 2; startPos4h = 3; endPos4h = 5; startPos1d = 6; endPos1d = 8;


  // 1st wave : check if macd cross the signal line in the withing the last 4 15min interval data points
  if ( macd_helper.fn_checkCrossover(result, startPos15m, endPos15m) == true ) { indicator_score = 100} else { indicator_score = -1000; }

  // 2nd wave  : if trending up +50 ; if below signal cross over + trending up +100 ; if neither reste to -1000
  if ( macd_helper.fn_checkTrend(result, startPos15m, endPos15m) == true && result[endPos4h].result.valueMACDHist < 0) 
    { indicator_score = indicator_score + 100 ; console.log("4h got 100 points")}
  else { indicator_score = -1000 ;}

   

  console.log("indicator score : " + indicator_score);

}).catch(error => {
    console.log(error);
});


// 15m : cross over = 100 | if below crossover reset to 0 and kick
// 4 day : trending up = +50 | below the signal cross over = 50 | if neither than reset to 0 and kick out
// 1 day : trending up = +50 | below the signal cross over = 50 | if neither than reset to 0 and kick out