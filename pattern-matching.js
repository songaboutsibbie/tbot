// pass is desired crypto as an input and run through a set of indicators


// set crypto and time period to run analysis on based on command line arguments
const crypto_lookup = require("./crypto-lookup.js");
const myArgs = process.argv.slice(2);
crypto = crypto_lookup.fn_crypto_lookup(myArgs[0]);
console.log('crypto to run analysis on is: ', crypto);
time_period = myArgs[1];
console.log('time period to run analysis on is: ', time_period);


// call bulkapi execute function in 3 increments 15 seconds apart
const bulkapi = require("./bulkapi.js");

result = bulkapi.fn_bulkapi_execute(["crows", "backcrows"], crypto, time_period);

//console.log("pattern results for first exeuction");
//console.log(result);