// retreives macd indicator data from a selected exchange across 3 different intervals
// analyses the data to calculator a score, where the higher the score the stronger the buy recommendation
// sends slack notification for scores passing a certain threshold

// set variables
const myArgs = process.argv.slice(2);
crypto = myArgs[0];  // crypto symbols pulled from arguments
indicator_score = 0;  // the higher the score the more likely the symbol will increase in value

// setup slack notifications
const slack = require("./helpers/slack-notification.js");

// import macd helper functions
const macd = require("./helpers/check-macd.js");
const calculate = require("./helpers/calculate-score.js");

// Require taapi: npm i taapi --save
const taapi = require("taapi");
 
// Setup client with authentication
const client = taapi.client("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjbHVlIjoiNjI2MzVhZjk0MjI0NmNlM2IwNGMzNDJkIiwiaWF0IjoxNjcwMjI5MzYwLCJleHAiOjMzMTc0NjkzMzYwfQ.QVROcNEXCK41L_4-9kcq3RB06s3L0mfFq4ir2MdcTlY");

// Init bulk queries. This resets all previously added queries
client.initBulkQueries();


// retrieve 4 macd data points across three different interval sets
client.addBulkQuery("macd", "binance", crypto, "15m");
client.addBulkQuery("macd", "binance", crypto, "15m", null, 1); 
client.addBulkQuery("macd", "binance", crypto, "15m", null, 2);
client.addBulkQuery("macd", "binance", crypto, "1d");
client.addBulkQuery("macd", "binance", crypto, "1d", null, 1);
client.addBulkQuery("macd", "binance", crypto, "1d", null, 2);
client.addBulkQuery("macd", "binance", crypto, "4h");
client.addBulkQuery("macd", "binance", crypto, "4h", null, 1);
client.addBulkQuery("macd", "binance", crypto, "4h", null, 2);

client.executeBulkQueries().then(result => {
  console.log("** Argument passed in is: " + crypto); // debug log
  //console.log(result);  // debug log

  
  startPos1 = 0; endPos1 = 2; startPos2 = 3; endPos2 = 5; startPos3 = 6; endPos3 = 8; // set start and finish positions of each macd interval type

  // Check macd against short term interval
  console.log("*** checking macd against short term interval (15m) ***"); //debug log
  crossover = macd.fn_checkCrossover(result, startPos1, endPos1);
  increaseRate = macd.fn_checkIncreaseRate(result, startPos1, endPos1);
  score = calculate.fn_macdShortInterval(crossover, increaseRate);

  
  // Check macd against long term interval
  console.log("\n*** checking macd against Long term interval (1d) ***"); //debug log
  
  trend = macd.fn_checkTrend(result, startPos2, endPos2);
  crossover = macd.fn_checkCrossover(result, startPos2, endPos2)
  score = score + calculate.fn_macdLongInterval(trend, crossover, result[endPos2].result.valueMACDHist);

  

  // Check macd against medium term interval
  console.log("\n*** checking macd against medium term interval (4h) ***"); //debug log
  
  trend = macd.fn_checkTrend(result, startPos3, endPos3);
  crossover = macd.fn_checkCrossover(result, startPos3, endPos3)
  score = score + calculate.fn_macdMediumInterval(trend, crossover, result[endPos2].result.valueMACDHist);
 
  console.log("indicator score : " + score);

  if(score > 110) {
    msg = "Buy " + crypto + "  : Score =  " + score 
    + "\nhttps://www.tradingview.com/chart/719ixDGW/?symbol=BINANCE%3A" + crypto.split('/')[0] + "USDT";
    slack.fn_sendmessage(msg);
  }  

}).catch(error => {
    console.log(error);
});