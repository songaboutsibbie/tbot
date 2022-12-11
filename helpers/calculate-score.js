// funcations calcualte score for a given result set.  startPos and endPos deteremine what part of the result set is relevant

// calculates a score based on macd over 15m interval
// if crossover occurs set score to 100, else set it to -1000 and exit program
// if rate of increase above 10% then add 20 to the score
function fn_macdShortInterval(crossover, increaseRate) {
  score = 0;

  if (crossover == true) {
    score = 100; console.log("+100 cross over occured recently - short interval")
    if(increaseRate > 10) { score = score + 20; console.log("+20 points : rate of increase - short interval")}  
  }
  else { indicator_score = -1000 ; console.log("-- failed to score on short term inteval. exiting"); }
   
  return score;
}

function fn_macdMediumInterval() {
  score = 0;



  return score;
}

// calculates a score based on macd over 1d interval
// if trending up score 50+ points else score -1000 and exit program
// if crossover hasn't occured or occurred recently give a bonus 25 points
// if rate of increase above 10% then add 20 to the score
function fn_macdLongInterval(trend, crossover, startingMACDHistValue) {
  score = 0;

  if ( trend == true ) {
    score = 50; console.log("50 points : trending up - long interval"); // debug log

    if ( crossover == true ) { 
      score = score + 25 ;  console.log("+20 points : crossed over occured recently - long term interval"); // debug log
    }
    if (Number(startingMACDHistValue) < 0) {
      score = score + 25 ;  console.log("+30 points : macd hasn't crossed over yet - long term interval"); // debug log
    }

  }
  else  { score = -1000 ; console.log("-- failed to score on Long Term Interval.  Exiting")} 


  return score;
}

module.exports = { fn_macdShortInterval, fn_macdMediumInterval, fn_macdLongInterval} ;
