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
client.addBulkQuery("macd", "binance", crypto, "1d");
client.addBulkQuery("macd", "binance", crypto, "1d", null, 1);
client.addBulkQuery("macd", "binance", crypto, "1d", null, 2);
client.addBulkQuery("macd", "binance", crypto, "4h");
client.addBulkQuery("macd", "binance", crypto, "4h", null, 1);
client.addBulkQuery("macd", "binance", crypto, "4h", null, 2);

client.executeBulkQueries().then(result => {
  console.log("** Argument passed in is: " + crypto); // debug log
  console.log(result);  // debug log

  // set start and finish positions of each macd interval type
  startPos1 = 0; endPos1 = 2; startPos2 = 3; endPos2 = 5; startPos3 = 6; endPos3 = 8;


  // 1st wave (15m) : if signal line crossed over recently = 100 | else exit
  console.log("\n*** first wave commencing ***"); //debug log
  
  if ( macd_helper.fn_checkCrossover(result, startPos1, endPos1) == true ) { 
    indicator_score = 100
    console.log("+100 points - first wave"); // debug log
  } 
  else { indicator_score = -1000; console.log("first wave failed to score")}


  // 2nd wave (1d)  : trending up + below signal crossover = 100 : trending up and recently crossed signal cross over = 50 | just trending up + 20
  console.log("\n*** second wave commencing ***"); //debug log
  
  trend = macd_helper.fn_checkTrend(result, startPos2, endPos2);
  crossover = macd_helper.fn_checkCrossover(result, startPos2, endPos2)

  if ( trend == true && result[endPos2].result.valueMACDHist < 0) { 
    indicator_score = indicator_score + 100 ;  console.log("+100 points - second wave trend up and signal line below macd"); // debug log
  } 
  else if ( trend == true && crossover == true) { 
    indicator_score = indicator_score + 50;  console.log("+50 points - second wave trend up and signal line crossed over recently"); // debug log
  }
  else if ( trend == true ) {
    indicator_score = indicator_score + 10; console.log("+20 points - second wave just trending up"); // debug log
  }
  else { indicator_score = -1000 ; console.log("third wave failed to score")} 


  // 3rd wave (4h) : trending up + below signal crossover = 100 : trending up and recently crossed signal cross over = 50 | just trending up + 10 | else if downward trend - exit
  console.log("\n*** third wave commencing ***"); //debug log
  
  trend = macd_helper.fn_checkTrend(result, startPos3, endPos3);
  crossover = macd_helper.fn_checkCrossover(result, startPos3, endPos3)

  if ( trend == true && result[endPos3].result.valueMACDHist < 0) { 
    indicator_score = indicator_score + 51 ; console.log("+100 points - third wave trend up and signal line below macd" ); // debug log
  }
  else if ( trend == true &&  crossover == true) { 
    indicator_score = indicator_score + 31; console.log("+50 points - third wave trend up and signal line crossed over recent"); // debug log
  }
  else if ( trend == true ) {
    indicator_score = indicator_score + 11; console.log("+ 10 points - third wave just trending up"); // debug log
  }
  else { indicator_score = -1000 ; console.log("third wave failed to score")} 

  console.log("indicator score : " + indicator_score);

  if(indicator_score > 110) {
    msg = "Buy " + crypto + "  : Score =  " + indicator_score 
    + "\nhttps://www.tradingview.com/chart/719ixDGW/?symbol=BINANCE%3A" + crypto.split('/')[0] + "USDT";
    slack.fn_sendmessage(msg);
  }  

}).catch(error => {
    console.log(error);
});


// 15m : cross over = 100 | if below crossover reset to 0 and kick
// 4 day : trending up = +50 | below the signal cross over = 50 | if neither than reset to 0 and kick out
// 1 day : trending up = +50 | below the signal cross over = 50 | if neither than reset to 0 and kick out