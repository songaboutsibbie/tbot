// https://taapi.io/indicators/pivot-points/

// Require taapi: npm i taapi --save
const taapi = require("taapi");
 
// Setup client with authentication
const client = taapi.client("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNvbmdhYm91dHNpYmJpZUBnbWFpbC5jb20iLCJpYXQiOjE2NTA2Nzg1MjEsImV4cCI6Nzk1Nzg3ODUyMX0.kB2EUss32pvD6D3Nv6pg92-ziJ_phjX722Qqx_eHbtU");

// Init bulk queries. This resets all previously added queries
client.initBulkQueries();
 
// Get the BTC/USDT rsi, ao, adx, cmf, macd, atr, rsi 5 hours ago, 50 MA values on the 1 hour time frame from binance
client.addBulkQuery("dmi", "binance", "BTC/USDT", "1d"); 
client.addBulkQuery("pivotpoints", "binance", "BTC/USDT", "1d");
client.addBulkQuery("dmi", "binance", "ETH/USDT", "1d");
client.addBulkQuery("pivotpoints", "binance", "ETH/USDT", "1d");

client.executeBulkQueries().then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
