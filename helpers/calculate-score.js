// funcations calcualte score for a given result set.  startPos and endPos deteremine what part of the result set is relevant

// calculates a score based on macd over 15m interval
// if crossover occurs set score to 100, else set it to -1000 and exit program
// if rate of increase above 10% then add 20 to the score
function fn_macdShortInterval(crossover, increaseRate) {
  score = 0;

  if (crossover == true) {
    score = 100;
    if(increaseRate > 10) { score = score + 20; console.log("+20 points for rate of increase")}  
  }
  else { indicator_score = -1000 ; console.log("-- failed to score on short term inteval. exiting"); }
   
  return score;
}

function fn_macdMediumInterval() {
  score = 0;



  return score;
}

function fn_macdLongInterval(trend, crossover, startingMACDHistValue) {
  score = 0;

  if ( trend == true && Number(startingMACDHistValue) < 0) { 
    score = score + 100 ;  console.log("+100 points - trend up and signal line below macd"); // debug log
  } 
  else if ( trend == true && crossover == true) { 
    score = indicator_score + 50;  console.log("+50 points - second wave trend up and signal line crossed over recently"); // debug log
  }
  else if ( trend == true ) {
    score = indicator_score + 10; console.log("+20 points - second wave just trending up"); // debug log
  }
  else { score = -1000 ; console.log("-- failed to score on Ling Term Interval.  Exiting")} 


  return score;
}

module.exports = { fn_macdShortInterval, fn_macdMediumInterval, fn_macdLongInterval} ;
