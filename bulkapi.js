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
   		return result;  
  }).catch(error => {
    	console.log(error);
  });

}

module.exports = { fn_bulkapi_execute } ;
