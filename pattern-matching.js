// pass is desired crypto as an input and run through a set of indicators


// set crypto and time period to run analysis on based on command line arguments
const crypto_lookup = require("./crypto-lookup.js");
const myArgs = process.argv.slice(2);
crypto = crypto_lookup.fn_crypto_lookup(myArgs[0]);
console.log('crypto to run analysis on is: ', crypto);
time_period = myArgs[1];
console.log('time period to run analysis on is: ', time_period);

// Require taapi: npm i taapi --save
  const taapi = require("taapi");

  // Setup client with authentication
  const client = taapi.client("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNvbmdhYm91dHNpYmJpZUBnbWFpbC5jb20iLCJpYXQiOjE2NTA2Nzg1MjEsImV4cCI6Nzk1Nzg3ODUyMX0.kB2EUss32pvD6D3Nv6pg92-ziJ_phjX722Qqx_eHbtU");

  client.initBulkQueries();
  indicators = [
  "2crows", "3blackcrows", "3inside", "3linestrike", "3outside", "3starsinsouth", "3whitesoldiers", "abandonedbaby",
  "advanceblock", "belthold", "breakaway", "closingmarubozu", "concealbabyswall", "counterattack", "darkcloudcover", 
  "doji", "dojistar", "dragonflydoji", "engulfing", "eveningdojistar"
  ];

  for (let i=0; i < indicators.length; i++) { client.addBulkQuery(indicators[i], "binance", crypto, time_period); }

  console.log("Execute bulk api for first time");
  client.executeBulkQueries().then(result => {
    console.log("results for first iteration are as follows");
    console.log(result);

    // SECOND LOOP
    client.initBulkQueries();
    indicators = [
    "eveningstar", "gapsidesidewhite", "gravestonedoji", "hammer", "hangingman", "harami", "haramicross", "highwave",
    "hikkake", "hikkakemod", "homingpigeon", "identical3crows", "inneck", "invertedhammer", "kicking", 
    "kickingbylength", "ladderbottom", "longleggeddoji", "longline", "marubozu"
    ];
    for (let i=0; i < indicators.length; i++) { client.addBulkQuery(indicators[i], "binance", crypto, time_period);}

    setTimeout(function() {
      client.executeBulkQueries().then(result => {
        console.log("results for second iteration are as follows");
        console.log(result);

        // THIRD LOOP
        client.initBulkQueries();
        indicators = [
        "matchinglow", "mathold", "morningdojistar", "morningstar", "onneck", "piercing", "rickshawman", "risefall3methods",
        "separatinglines", "shootingstar", "shortline", "spinningtop", "stalledpattern", "sticksandwich", "takuri", 
        "tasukigap", "thrusting", "tristar", "unique3river", "upsidegap2crows"
        ];
        for (let i=0; i < indicators.length; i++) { client.addBulkQuery(indicators[i], "binance", crypto, time_period); }

        setTimeout(function() {
          client.executeBulkQueries().then(result => {
            console.log("results for third iteration are as follows");
            console.log(result);      

            }).catch(error => {
                console.log(error);
           });
          }, 15000);


      }).catch(error => {
        console.log(error);
      });
    }, 15000);

  }).catch(error => {
      console.log(error);
  });




/*
// call bulkapi execute function in 3 increments 15 seconds apart
const bulkapi = require("./bulkapi.js");
indicators = [
"2crows", "3blackcrows", "3inside", "3linestrike", "3outside", "3starsinsouth", "3whitesoldiers", "abandonedbaby",
"advanceblock", "belthold", "breakaway", "closingmarubozu", "concealbabyswall", "counterattack", "darkcloudcover", 
"doji", "dojistar", "dragonflydoji", "engulfing", "eveningdojistar"
];

console.log("calling bulk api with first set of indicators");
bulkapi.fn_bulkapi_execute(indicators, crypto, time_period);
console.log("returned from bulkapi");

*/

