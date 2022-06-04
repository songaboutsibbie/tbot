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

  
// execture bulk queries
client.executeBulkQueries().then(result => {
  console.log(result);

  for (let i=0; i < result.length; i++) {
    console.log(result[i].result.valueMACDHist);
  }

}).catch(error => {
    console.log(error);
});
