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

	console.log("Execute bulk api for first time");
 	client.executeBulkQueries().then(result => {
    console.log("results for first iteration are as follows");
    console.log(result);

    setTimeout(() => { console.log("World!"); }, 2000);
    client.initBulkQueries();
    for (let i=0; i < pattern.length; i++) {
      console.log ("adding bulkquery with" + pattern[i] + crypto + time_period ) ;
      client.addBulkQuery(pattern[i], "binance", crypto, time_period);  
    }
    client.executeBulkQueries().then(result => {
      console.log("Blowing things up");
    }).catch(error => {
      console.log(error);
    });

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