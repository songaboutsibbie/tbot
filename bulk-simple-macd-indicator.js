// macd

// Require taapi: npm i taapi --save
const taapi = require("taapi");

// Setup client with authentication
const client = taapi.client("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNvbmdhYm91dHNpYmJpZUBnbWFpbC5jb20iLCJpYXQiOjE2NTA2Nzg1MjEsImV4cCI6Nzk1Nzg3ODUyMX0.kB2EUss32pvD6D3Nv6pg92-ziJ_phjX722Qqx_eHbtU");
const crypto_list_helper = require("./helpers/crypto-list.js");

crypto_list = crypto_list_helper.fn_crypto_list(1);


client.initBulkQueries();

for (let i=0; i < crypto_list.length; i++) {
  client.addBulkQuery("macd", "binance", crypto_list[i], "4h");

}

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

}).then( result => {
  console.log("Im in a second then");
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
