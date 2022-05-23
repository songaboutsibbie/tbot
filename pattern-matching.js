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
result = bulkapi.fn_bulkapi_execute(indicators, crypto, time_period);

//console.log("pattern results for first exeuction");
//console.log(result);

/*
client.addBulkQuery("", "binance", crypto, time_period);
client.addBulkQuery( "binance", crypto, time_period);
client.addBulkQuery( "binance", crypto, time_period);
client.addBulkQuery( "binance", crypto, time_period);
client.addBulkQuery( "binance", crypto, time_period);
client.addBulkQuery( "binance", crypto, time_period);
client.addBulkQuery( "binance", crypto, time_period);
client.addBulkQuery("binance", crypto, time_period);
client.addBulkQuery("binance", crypto, time_period);
client.addBulkQuery( "binance", crypto, time_period);
client.addBulkQuery("binance", crypto, time_period);
client.addBulkQuery("binance", crypto, time_period);
client.addBulkQuery("binance", crypto, time_period);



client.addBulkQuery("eveningstar", "binance", crypto, time_period);
client.addBulkQuery("gapsidesidewhite", "binance", crypto, time_period);
client.addBulkQuery("gravestonedoji", "binance", crypto, time_period);
client.addBulkQuery("hammer", "binance", crypto, time_period);
client.addBulkQuery("hangingman", "binance", crypto, time_period);
client.addBulkQuery("harami", "binance", crypto, time_period);
client.addBulkQuery("haramicross", "binance", crypto, time_period);
client.addBulkQuery("highwave", "binance", crypto, time_period);
client.addBulkQuery("hikkake", "binance", crypto, time_period);
client.addBulkQuery("hikkakemod", "binance", crypto, time_period);
client.addBulkQuery("homingpigeon", "binance", crypto, time_period);
client.addBulkQuery("identical3crows", "binance", crypto, time_period);
client.addBulkQuery("inneck", "binance", crypto, time_period);
client.addBulkQuery("invertedhammer", "binance", crypto, time_period);
client.addBulkQuery("kicking", "binance", crypto, time_period);
client.addBulkQuery("kickingbylength", "binance", crypto, time_period);
client.addBulkQuery("ladderbottom", "binance", crypto, time_period);
client.addBulkQuery("longleggeddoji", "binance", crypto, time_period);
client.addBulkQuery("longline", "binance", crypto, time_period);
client.addBulkQuery("marubozu", "binance", crypto, time_period);


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