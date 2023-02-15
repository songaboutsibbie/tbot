/* checks price and rsi diversion and determines whether to take a short or long position

recommended time period is 1hour or great.  will run this in 1hour and 1day configurations

LONG position conditions (BULLISH DIVERSION)
1. Downward trend price
2. At least 2 lower lows exist on price
3. At least 2 higher lows exist on rsi
4. Have entered oversold range (less than 30)

SHORT position conditions (BEARISH DIVERSION)
1. Upward trend price
2. At least 2 higher highs on price
3. At least 2 lower highs on rsi
4. Have entered oversold range (greater than 70)

*/


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
  rsiResponse.data.reverse();
  msg = "";

  /* check price trend.  
  If downward then check for bullish divergence / long position.  
  If trned upwards then check for bearish divergence / short position
  */

  priceTrend =  rsi.fn_detectTrend(priceResponse.data)

  if (priceTrend == "downward" ) {
    // retieve an array of price data and determine how many of them are lower lows
    //console.log("downward trend"); console.log(priceResponse.data);    console.log(rsiResponse.data);
    priceLowArray = rsi.fn_findLows(priceResponse.data); console.log("price low array : " + priceLowArray);
    LowerLowCount = rsi.fn_detectLowerLows(priceLowArray);

    //retrieve an array of rsi data and determine how many of them are higher lows
    rsiLowArray = rsi.fn_findLows(rsiResponse.data); console.log("rsi low array : " + rsiLowArray);
    HigherLowsCount = rsi.fn_detectHigherLows(rsiLowArray);

    //console.log("Price Lower Low Count: " + LowerLowCount + "  RSI Higher Low Count: " + HigherLowsCount)

    if ( LowerLowCount > 1 && HigherLowsCount > 1) { 
      msg = "BULLISH CONVERGENCE DETECTED : " + crypto; console.log("BULLISH CONVERGENCE DETECTED") ;
    }

    if (rsiResponse.data[backtracks - 1] > 25) {
      msg = msg + "\n and its moved out of the oversold range.  Take long position now"
    }

  } else if (priceTrend == "upward") {
    // retieve an array of price data and determine how many of them are higher hights
    console.log("upward trend"); console.log(priceResponse.data);    console.log(rsiResponse.data);
    priceHighArray = rsi.fn_findHighs(priceResponse.data); console.log("price high array : " + priceHighArray);
    HigherHighCount = rsi.fn_detectHigherHighs(priceHighArray);

    // retreive an array of rsi data and determine how many of them are lower highs
    rsiHighAway = rsi.fn_findHighs(rsiResponse.data); console.log("rsi high array : " + rsiHighAway);
    LowerHighsCount = rsi.fn_detectLowerHighs(rsiHighAway); 

    console.log("Price Higher High Count: " + HigherHighCount + "  RSI Lower High Count: " + LowerHighsCount)

    if ( HigherHighCount > 1 && LowerHighsCount > 1) { 
      msg = "BEARISH CONVERGENCE DETECTED : " + crypto; console.log("BEARISH CONVERGENCE DETECTED") ;
    }

    if (rsiResponse.data[backtracks - 1] < 75) {
      msg = msg + "\n and its moved out of the overbought range.  Take short position now"
    }

  }
  if(msg){ 
    slack.fn_sendmessage(msg);
    console.log(msg);
  }
  if(!msg) { console.log("no luck");}


  } catch (err) {
      // Handle Error Here
      console.error(err);
  }
};

getData();

