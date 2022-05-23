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
indicators = [
"2crows", "3blackcrows", "3inside", "3linestrike", "3outside", "3starsinsouth", "3whitesoldiers", "abandonedbaby",
"advanceblock", "belthold", "breakaway", "closingmarubozu", "concealbabyswall", "counterattack", "darkcloudcover", 
"doji", "dojistar", "dragonflydoji", "engulfing", "eveningdojistar"
];

console.log("calling bulk api with first set of indicators");
setTimeout(function() { bulkapi.fn_bulkapi_execute(indicators, crypto, time_period); }, 15000);
console.log("returned from bulkapi");

indicators = [
"eveningstar", "gapsidesidewhite", "gravestonedoji", "hammer", "hangingman", "harami", "haramicross", "highwave",
"hikkake", "hikkakemod", "homingpigeon", "identical3crows", "inneck", "invertedhammer", "kicking", 
"kickingbylength", "ladderbottom", "longleggeddoji", "longline", "marubozu"
];

console.log("calling bulk api with second set of indicators");
setTimeout(function() { bulkapi.fn_bulkapi_execute(indicators, crypto, time_period); }, 15000);
console.log("returned from bulkapi");
console.log("returned from bulkapi");


/*



client.addBulkQuery("matchinglow", "binance", crypto, time_period);
client.addBulkQuery("mathold", "binance", crypto, time_period);
client.addBulkQuery("morningdojistar", "binance", crypto, time_period);
client.addBulkQuery("morningstar", "binance", crypto, time_period);
client.addBulkQuery("onneck", "binance", crypto, time_period);
client.addBulkQuery("piercing", "binance", crypto, time_period);
client.addBulkQuery("rickshawman", "binance", crypto, time_period);
client.addBulkQuery("risefall3methods", "binance", crypto, time_period);
client.addBulkQuery("separatinglines", "binance", crypto, time_period);
client.addBulkQuery("shootingstar", "binance", crypto, time_period);
client.addBulkQuery("shortline", "binance", crypto, time_period);
client.addBulkQuery("spinningtop", "binance", crypto, time_period);
client.addBulkQuery("stalledpattern", "binance", crypto, time_period);
client.addBulkQuery("sticksandwich", "binance", crypto, time_period);
client.addBulkQuery("takuri", "binance", crypto, time_period);
client.addBulkQuery("tasukigap", "binance", crypto, time_period);
client.addBulkQuery("thrusting", "binance", crypto, time_period);
client.addBulkQuery("tristar", "binance", crypto, time_period);
client.addBulkQuery("unique3river", "binance", crypto, time_period);
client.addBulkQuery("upsidegap2crows", "binance", crypto, time_period);

*/