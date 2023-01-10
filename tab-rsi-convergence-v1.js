// conditions that need to be met for rsi convergence are
// 1. price is trending down
// 2. rsi is trending up
// 3. price forms lower lows
// 4. rsi is forming higher lows

// set crypto (from args) & hard code time period and backtrack perios
const myArgs = process.argv.slice(2);
crypto = myArgs[0];
time_period = myArgs[1]
backtracks = 20; // 2 hours using 15 min time period


// setup dependencies
const slack = require("./helpers/slack-notification.js"); // slack notifications
const axios = require('axios')
const rsi = require("./helpers/check-rsi.js");  // check rsi indicator

// retrieve price and rsi data from exchange
const getData = async () => {
  try {
      const rsiResponse = await axios.get('https://api.taapi.io/rsi', {
        headers: { 'Accept-Encoding': 'application/json'},
        params: {
          secret: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjbHVlIjoiNjI2MzVhZjk0MjI0NmNlM2IwNGMzNDJkIiwiaWF0IjoxNjcwMjI5MzYwLCJleHAiOjMzMTc0NjkzMzYwfQ.QVROcNEXCK41L_4-9kcq3RB06s3L0mfFq4ir2MdcTlY",
          exchange: "binance",            
          symbol: crypto,
          interval: time_period,
          backtracks: backtracks,
        }
      });

      const priceResponse = await axios.get('https://api.taapi.io/typprice', {
        headers: { 'Accept-Encoding': 'application/json'},
        params: {
          secret: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjbHVlIjoiNjI2MzVhZjk0MjI0NmNlM2IwNGMzNDJkIiwiaWF0IjoxNjcwMjI5MzYwLCJleHAiOjMzMTc0NjkzMzYwfQ.QVROcNEXCK41L_4-9kcq3RB06s3L0mfFq4ir2MdcTlY",
          exchange: "binance",
          symbol: crypto,
          interval: time_period,
          backtracks: backtracks,          
        }
      });

  console.log("** Argument passed in is: " + crypto);
  priceResponse.data.reverse(); 
  //console.log(priceResponse.data);  
  //console.log(rsiResponse.data);


  // 1. check that price is trending down
  priceTrend =  rsi.fn_detectTrend(priceResponse.data)
  //console.log("price trend is : " + priceTrend)

  // 2. check that rsi is trending up
  rsiTrend =  rsi.fn_detectTrend(rsiResponse.data)
  //console.log("rsi trend is : " + rsiTrend)

  // 3. price is forming lower lows
  priceLowArray = rsi.fn_findLows(priceResponse.data)
  //console.log("Price Lows are : " + priceLowArray);

  LowerLowCount = rsi.fn_detectLowerLows(priceLowArray);
  //console.log("Price Lower Lows Count is : " + LowerLowCount)


  // 4. price is forming lower lows
  rsiLowArray = rsi.fn_findLows(rsiResponse.data)
  //console.log("RSI Lows are : " + rsiLowArray);

  HigherLowsCount = rsi.fn_detectHigherLows(rsiLowArray);
  //console.log("RSI Lower Lows Count is : " + HigherLowsCount)

  if ( priceTrend == "downward" && rsiTrend == "downward" && LowerLowCount > 2 && HigherLowsCount > 2) {
    console.log("we have a winner");
    // do some shit
    msg = "Price and RSI convergence detected for : +  "  crypto;
    slack.fn_sendmessage(msg);    
  } 
  else {console.log("no dice"); }



  } catch (err) {
      // Handle Error Here
      console.error(err);
  }
};

getData();

