// macd


// set crypto and time period to run analysis on based on command line arguments
const crypto_lookup = require("./helpers/crypto-lookup.js");
const myArgs = process.argv.slice(2);
crypto = crypto_lookup.fn_crypto_lookup(myArgs[0]);
console.log('crypto to run analysis on is: ', crypto);
time_period = myArgs[1];
console.log('time period to run analysis on is: ', time_period);



var axios = require('axios');

axios.get('https://api.taapi.io/macd', {
  params: {
    secret: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNvbmdhYm91dHNpYmJpZUBnbWFpbC5jb20iLCJpYXQiOjE2NTA2Nzg1MjEsImV4cCI6Nzk1Nzg3ODUyMX0.kB2EUss32pvD6D3Nv6pg92-ziJ_phjX722Qqx_eHbtU",
    exchange: "binance",
    symbol: crypto,
    interval: time_period,
    backtracks: "20",
  }
})
.then(function (response) {
  console.log(response.data);
})
.catch(function (error) {
  console.log(error.response.data);
});

