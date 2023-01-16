// comments

// set argument variables to myArgs
const myArgs = process.argv.slice(2);

// setup functions
const slack = require("./helpers/slack-notification.js"); // slack notifications
const rsi = require("./helpers/check-rsi.js");  // check rsi indicator
const writeFile = require("./helpers/write-file.js"); // write file
const taapi = require("taapi"); // Require taapi: npm i taapi --save

// Setup client with authentication
const client = taapi.client("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjbHVlIjoiNjI2MzVhZjk0MjI0NmNlM2IwNGMzNDJkIiwiaWF0IjoxNjcwMjI5MzYwLCJleHAiOjMzMTc0NjkzMzYwfQ.QVROcNEXCK41L_4-9kcq3RB06s3L0mfFq4ir2MdcTlY");


//Initialise bulk query add queries from argument variables
client.initBulkQueries();
for(i = 0; i < myArgs.length; ++ i) { client.addBulkQuery("rsi", "binance", myArgs[i], "15m") }

client.executeBulkQueries().then(result => {
  for(i = 0; i < result.length; i++) {
    let rsi_value = result[i].result.value; 
    console.log(result[i].id + " : " + rsi_value)

    buy_indicator = rsi.fn_isOversold(rsi_value)

    if(buy_indicator == true) {
      let symbol_full = result[i].id.split("_");
      let symbol_short = symbol_full[2];
      
      console.log(symbol_short + " is oversold. sending notification");
      msg = symbol_short + "  has recently become oversold : " + rsi_value;
      slack.fn_sendmessage(msg);
      writeFile.fn_writeBuyOrder(symbol_short);
    }  

  }
 
  

}).catch(error => {
    console.log(error);
});