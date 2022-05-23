function fn_bulkapi_execute(pattern, crypto, time_period) {
  console.log("bulk api function has been called.  Adding Bulk Queries");

  // Require taapi: npm i taapi --save
  const taapi = require("taapi");

  // Setup client with authentication
  const client = taapi.client("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNvbmdhYm91dHNpYmJpZUBnbWFpbC5jb20iLCJpYXQiOjE2NTA2Nzg1MjEsImV4cCI6Nzk1Nzg3ODUyMX0.kB2EUss32pvD6D3Nv6pg92-ziJ_phjX722Qqx_eHbtU");

  client.initBulkQueries();

	for (let i=0; i < pattern.length; i++) {
    console.log ("adding bulkquery with" + pattern[i] + crypto + time_period ) ;
 		client.addBulkQuery(pattern[i], "binance", crypto, time_period);	
	}

	console.log("Execute bulk api");
 	client.executeBulkQueries().then(result => {
      console.log("results are as follows");
      console.log(result);
   		//return result;  
  }).catch(error => {
    	console.log(error);
  });

}

module.exports = { fn_bulkapi_execute } ;


/*

// Init bulk queries. This resets all previously added queries. Max of 20
console.log("1 - Clear Bulk API and Load up with 20");
client.initBulkQueries();
client.addBulkQuery("2crows", "binance", crypto, time_period);
client.addBulkQuery("3blackcrows", "binance", crypto, time_period);
client.addBulkQuery("3inside", "binance", crypto, time_period);
client.addBulkQuery("3linestrike", "binance", crypto, time_period);
client.addBulkQuery("3outside", "binance", crypto, time_period);
client.addBulkQuery("3starsinsouth", "binance", crypto, time_period);
client.addBulkQuery("3whitesoldiers", "binance", crypto, time_period);
client.addBulkQuery("abandonedbaby", "binance", crypto, time_period);
client.addBulkQuery("advanceblock", "binance", crypto, time_period);
client.addBulkQuery("belthold", "binance", crypto, time_period);
client.addBulkQuery("breakaway", "binance", crypto, time_period);
client.addBulkQuery("closingmarubozu", "binance", crypto, time_period);
client.addBulkQuery("concealbabyswall", "binance", crypto, time_period);
client.addBulkQuery("counterattack", "binance", crypto, time_period);
client.addBulkQuery("darkcloudcover", "binance", crypto, time_period);
client.addBulkQuery("doji", "binance", crypto, time_period);
client.addBulkQuery("dojistar", "binance", crypto, time_period);
client.addBulkQuery("dragonflydoji", "binance", crypto, time_period);
client.addBulkQuery("engulfing", "binance", crypto, time_period);
client.addBulkQuery("eveningdojistar", "binance", crypto, time_period);

// execture bulk queries
client.executeBulkQueries().then(result => {
  console.log("1 - Executing Bulk Queries.  Results are \n");
  console.log(result);
  for (let i=0; i < result.length; i++) {
    if (result[i].result.value > 80) {
      console.log(result[i].indicator + "pattern matches with value of " + result[i].result.value);
    }
  }
}).catch(error => {
    console.log(error);
});


// Init bulk queries. This resets all previously added queries. Max of 20
console.log("2 - Clear Bulk API and Load up with 20");
client.initBulkQueries();
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



client.initBulkQueries();
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
