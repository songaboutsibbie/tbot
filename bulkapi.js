function fn_bulkapi_execute(pattern, crypto, time_period) {
  console.log("bulk api function has been called.  Adding Bulk Queries");

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

	for (let i=0; i < indicators.length; i++) {
    console.log ("adding bulkquery with" + indicators[i] + crypto + time_period ) ;
 		client.addBulkQuery(indicators[i], "binance", crypto, time_period);	
	}

	console.log("Execute bulk api for first time");
 	client.executeBulkQueries().then(result => {
    console.log("results for first iteration are as follows");
    console.log(result);

    // SECOND LOOP
    client.initBulkQueries();
    for (let i=0; i < pattern.length; i++) {
      console.log ("adding bulkquery with" + pattern[i] + crypto + time_period ) ;
      client.addBulkQuery(pattern[i], "binance", crypto, time_period);  
    }
    setTimeout(function() {
      client.executeBulkQueries().then(result => {
        console.log("results for second iteration are as follows");
        console.log(result);

        // THIRD LOOP
        client.initBulkQueries();
        for (let i=0; i < pattern.length; i++) {
          console.log ("adding bulkquery with" + pattern[i] + crypto + time_period ) ;
          client.addBulkQuery(pattern[i], "binance", crypto, time_period);  
        }
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

}

module.exports = { fn_bulkapi_execute } ;



/*
for (let i=0; i < result.length; i++) {
    if (result[i].result.value > 80) {
      console.log(result[i].indicator + "pattern matches with value of " + result[i].result.value);
    }
  }
*/