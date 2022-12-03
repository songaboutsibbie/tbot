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


// 1st check : did macd cross the signal line in the withing the last 4 15min interval data points
    //if ( macd_helper.fn_crossover(result) == true ) { indicator_score = 100} else { indicator_score = -1000; }
   

    console.log("indicator score : " + indicator_score);

}).catch(error => {
    console.log(error);
});


// 15m : cross over = 100 | if below crossover reset to 0 and kick
// 4 day : trending up = +50 | below the signal cross over = 50 | if neither than reset to 0 and kick out
// 1 day : trending up = +50 | below the signal cross over = 50 | if neither than reset to 0 and kick out