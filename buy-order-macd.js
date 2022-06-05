// provide buy order recommendation using macd algorithm

// Require taapi: npm i taapi --save
const taapi = require("taapi");

// Setup client with authentication
const client = taapi.client("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNvbmdhYm91dHNpYmJpZUBnbWFpbC5jb20iLCJpYXQiOjE2NTA2Nzg1MjEsImV4cCI6Nzk1Nzg3ODUyMX0.kB2EUss32pvD6D3Nv6pg92-ziJ_phjX722Qqx_eHbtU");

// setup slack notifications
const slack = require("./helpers/slack-notification.js");


// get list of owned cryptos using value passed in as an arg
const crypto_list_helper = require("./helpers/crypto-list.js");
const myArgs = process.argv.slice(2);
cryptoarg = myArgs[0];
crypto_list = crypto_list_helper.fn_get_crypto_list(cryptoarg);

console.log("Executing buy order recommendations against crypto list " + cryptoarg);

// Load up 20 queries to execute in bulk
client.initBulkQueries();
for (let i=0; i < crypto_list.length; i++) {
  client.addBulkQuery("macd", "binance", crypto_list[i], "4h");

}

//execute queries.  If histo value is positive send buy order recommendation to slack
client.executeBulkQueries().then(result => {
  console.log(result);

  var msg = "Buy Order Recommendation\n";
  for (let i=0; i < result.length; i++) {
    if ( result[i].result.valueMACDHist > 0) {  
      var msg = msg + "\nBUY : " + result[i].id + " has a MACD histogram value of " + result[i].result.valueMACDHist ;       
    }
  }
  slack.fn_sendmessage(msg);
  


}).then( result => {
  // this may have a future use
}).catch(error => {
    console.log(error);
});