// check 70 patterns against crypto and timeperiod passed in as variables

// Require taapi: npm i taapi --save
const taapi = require("taapi");

// Setup client with authentication
const client = taapi.client("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNvbmdhYm91dHNpYmJpZUBnbWFpbC5jb20iLCJpYXQiOjE2NTA2Nzg1MjEsImV4cCI6Nzk1Nzg3ODUyMX0.kB2EUss32pvD6D3Nv6pg92-ziJ_phjX722Qqx_eHbtU");


// set crypto and time period to run analysis on based on command line arguments
const crypto_lookup = require("./crypto-lookup.js");
const myArgs = process.argv.slice(2);
crypto = crypto_lookup.fn_crypto_lookup(myArgs[0]);
console.log('crypto to run analysis on is: ', crypto);
time_period = myArgs[1];
console.log('time period to run analysis on is: ', time_period);

// EXECUTE FIRST 20
client.initBulkQueries();
indicators = [
"2crows", "3blackcrows", "3inside", "3linestrike", "3outside", "3starsinsouth", "3whitesoldiers", "abandonedbaby",
"advanceblock", "belthold", "breakaway", "closingmarubozu", "concealbabyswall", "counterattack", "darkcloudcover", 
"doji", "dojistar", "dragonflydoji", "engulfing", "eveningdojistar"
];

for (let i=0; i < indicators.length; i++) { client.addBulkQuery(indicators[i], "binance", crypto, time_period); }

client.executeBulkQueries().then(result => {
  for (let i=0; i < result.length; i++) {
    if (result[i].result.value > 80) { console.log(result[i].indicator + "pattern matches: value = " + result[i].result.value); }
    else { console.log("pattern not matched for" + indicator ); }
  }

  // EXECUTE SECOND 20
  client.initBulkQueries();
  indicators = [
  "eveningstar", "gapsidesidewhite", "gravestonedoji", "hammer", "hangingman", "harami", "haramicross", "highwave",
  "hikkake", "hikkakemod", "homingpigeon", "identical3crows", "inneck", "invertedhammer", "kicking", 
  "kickingbylength", "ladderbottom", "longleggeddoji", "longline", "marubozu"
  ];
  
  for (let i=0; i < indicators.length; i++) { client.addBulkQuery(indicators[i], "binance", crypto, time_period);}

  setTimeout(function() {
    client.executeBulkQueries().then(result => {
      console.log(result);

      // EXECUTE THIRD 20
      client.initBulkQueries();
      indicators = [
      "matchinglow", "mathold", "morningdojistar", "morningstar", "onneck", "piercing", "rickshawman", "risefall3methods",
      "separatinglines", "shootingstar", "shortline", "spinningtop", "stalledpattern", "sticksandwich", "takuri", 
      "tasukigap", "thrusting", "tristar", "unique3river", "upsidegap2crows"
      ];
      for (let i=0; i < indicators.length; i++) { client.addBulkQuery(indicators[i], "binance", crypto, time_period); }

      setTimeout(function() {
        client.executeBulkQueries().then(result => {
          console.log(result);      

          }).catch(error => {
              console.log(error);
         });
        }, 15000);
        // END OF THIRD 20

    }).catch(error => {
      console.log(error);
    });
  }, 15000);
  // END OF SECOND 20


// END OF FIRST 20
}).catch(error => {
      console.log(error);
});

