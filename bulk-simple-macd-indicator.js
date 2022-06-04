// macd

// Require taapi: npm i taapi --save
const taapi = require("taapi");

// Setup client with authentication
const client = taapi.client("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNvbmdhYm91dHNpYmJpZUBnbWFpbC5jb20iLCJpYXQiOjE2NTA2Nzg1MjEsImV4cCI6Nzk1Nzg3ODUyMX0.kB2EUss32pvD6D3Nv6pg92-ziJ_phjX722Qqx_eHbtU");
const crypto_list_helper = require("./helpers/crypto-list.js");

// setup slack notifications
const slack = require("./helpers/slack-notification.js");

// Pull in crypto list 1
crypto_list = crypto_list_helper.fn_crypto_list(1);


// Load up 20 queries to execute in bulk
client.initBulkQueries();
for (let i=0; i < crypto_list.length; i++) {
  client.addBulkQuery("macd", "binance", crypto_list[i], "4h");

}

//execute queries and display buy or sell results
client.executeBulkQueries().then(result => {
  console.log(result);

  console.log("\n*** SELL RESULTS ***")
  for (let i=0; i < result.length; i++) {
    if ( result[i].result.valueMACDHist < 0) {  
      var msg = result[i].id + " has macd.histo value of " + result[i].result.valueMACDHist ; 
      slack.fn_sendmessage(msg);    
    }
  }

  console.log("\n*** BUY RESULTS ***")
  for (let i=0; i < result.length; i++) {
    if ( result[i].result.valueMACDHist > 0)  { 
      var msg = result[i].id + " has macd.histo value of " + result[i].result.valueMACDHist ; 
      slack.fn_sendmessage(msg);   
    }
  }

  

}).then( result => {
  // this may have a future use
}).catch(error => {
    console.log(error);
});


/*
client.executeBulkQueries().then(result => {
  console.log(result);

  console.log("\n*** SELL RESULTS ***")
  for (let i=0; i < result.length; i++) {
    if ( result[i].result.valueMACDHist < 0) { console.log(result[i].id + " has macd.histo value of " + result[i].result.valueMACDHist ); }
  }

  console.log("\n*** BUY RESULTS ***")
  for (let i=0; i < result.length; i++) {
    if ( result[i].result.valueMACDHist > 0)  { 
      msg = console.log(result[i].id + " has macd.histo value of " + result[i].result.valueMACDHist ); 
      //curl -X POST -H 'Content-type: application/json' --data '{"text":"test"}' https://hooks.slack.com/services/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
    }
  }

}).catch(error => {
    console.log(error);
});
*/
