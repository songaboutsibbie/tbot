function recommend(result) {
	// indicates whether a crypto is overbought(sell) or oversold(buy)
	if (result.indicator == "cci") {
		if (result.result.value > 100) { return "Overbought - SELL"; }
		else if (result.result.value < -100) { return "Overrsold - BUY" ; }
		else { return "HODL" ; }
	}
	// indicates whether a crypto is overbought or sold
	else if (result.indicator == "rsi") {
                if (result.result.value > 70) { return "Overbought - SELL"; }
                else if (result.result.value < 30) { return "Overrsold - BUY" ; }
                else { return "HODL" ; }
	}
	else if (result.indicator == "ultosc") {
                if (result.result.value > 70) { return "Overbought - SELL"; }
                else if (result.result.value < 30) { return "Overrsold - BUY" ; }
                else { return "HODL" ; }
        }
	else if (result.indicator == "stoch") {
                if (result.result.valueK > 80 && result.result.valueD > 80) { return "Overbought - SELL"; }
                else if (result.result.valueK < 20 && result.result.valueD < 20) { return "Overrsold - BUY" ; }
                else { return "HODL" ; }
        }
	else if (result.indicator == "willr") {
                if (result.result.value > -20) { return "Overbought - SELL"; }
                else if (result.result.value < -80) { return "Overrsold - BUY" ; }
                else { return "HODL" ; }
        }
	// strength of trend - higher the stronger
	else if (result.indicator == "adx") {
                if (result.result.value < 25) { return "WEAK Trend"; }
                else if (result.result.value > 25 && result.result.value < 50) { return "STRONG Trend" ; }
		else if (result.result.value > 50 && result.result.value < 75) { return "VERY STRONG Trend" ; }
                else { return "EXTREMELY STRONG Trend"; }
        }
	else if (result.indicator == "ao") {
                if (result.result.value < 25) { return "WEAK Trend"; }
                else if (result.result.value > 25 && result.result.value < 50) { return "STRONG Trend" ; }
                else if (result.result.value > 50 && result.result.value < 75) { return "VERY STRONG Trend" ; }
                else { return "EXTREMELY STRONG Trend"; }
        }
	else {
		return "indicator not defined" ;
	}
}

module.exports = { recommend };
