// pass is desired crypto as an input and run through a set of indicators

// Require taapi: npm i taapi --save
const taapi = require("taapi");

// Setup client with authentication
const client = taapi.client("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNvbmdhYm91dHNpYmJpZUBnbWFpbC5jb20iLCJpYXQiOjE2NTA2Nzg1MjEsImV4cCI6Nzk1Nzg3ODUyMX0.kB2EUss32pvD6D3Nv6pg92-ziJ_phjX722Qqx_eHbtU");

// set crypto to run analysis on based on command line arguments
const crypto_lookup = require("./crypto-lookup.js");
const myArgs = process.argv.slice(2);
crypto = crypto_lookup.fn_crypto_lookup(myArgs[0]);
console.log('crypto to run analysis on is: ', crypto);
time_period = myArgs[1];
console.log('time period to run analysis on is: ', time_period);


// call bulkapi execute function in 3 increments 15 seconds apart
const bulkapi_execute = require("./bulkapi-execution.js");

result = bulkapi_execute("crows", "backcrows");

console.log("pattern results for first exeuction");
console.log(result);