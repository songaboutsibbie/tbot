// pass is desired crypto as an input and run through a set of indicators

// Require taapi: npm i taapi --save
const taapi = require("taapi");

// Setup client with authentication
const client = taapi.client("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNvbmdhYm91dHNpYmJpZUBnbWFpbC5jb20iLCJpYXQiOjE2NTA2Nzg1MjEsImV4cCI6Nzk1Nzg3ODUyMX0.kB2EUss32pvD6D3Nv6pg92-ziJ_phjX722Qqx_eHbtU");

// import crypto list & analysis modules
const mom_indicators = require("./momentum-indicators.js");
const crypto_lookup = require("./crypto-lookup.js");

// set crypto to run analysis on based on command line arguments
const myArgs = process.argv.slice(2);
crypto = crypto_lookup.fn_crypto_lookup(myArgs[0]);
console.log('crypto to run analysis on is: ', crypto);
time_period = myArgs[1];
console.log('time period to run analysis on is: ', time_period);

// Init bulk queries. This resets all previously added queries
client.initBulkQueries();

// retriev crypto list, run through each crypto and add a bulk query for the following set of indicators
client.addBulkQuery("cci", "binance", crypto, time_period);
client.addBulkQuery("rsi", "binance", crypto, time_period);
client.addBulkQuery("ultosc", "binance", crypto, time_period);
client.addBulkQuery("stoch", "binance", crypto, time_period);
client.addBulkQuery("willr", "binance", crypto, time_period);
client.addBulkQuery("adx", "binance", crypto, time_period);
//client.addBulkQuery("ao", "binance", crypto, time_period);
	

// execture bulk queries
client.executeBulkQueries().then(result => {
    console.log(result);

    console.log("\nmomentum indicators\n");	
    for (let i=0; i < result.length; i++) {
	const recomendation = mom_indicators.recommend(result[i]);
	console.log(result[i].id + " : " + recomendation );
    }
}).catch(error => {
    console.log(error);
});

