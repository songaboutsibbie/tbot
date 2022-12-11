// funcations calcualte score for a given result set.  startPos and endPos deteremine what part of the result set is relevant

// calculates a score based on macd over 15m interval
function fn_macd15score(crossover, increaseRate) {
  score = 0;
  
  if (crossover == true) {
    score = 100;
    if(increaseRate > 10) { score = score + 50}  
  }
  else { indicator_score = -1000 ; }
   
  return score;
}



module.exports = { fn_macd15score} ;
