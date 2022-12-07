//    retrieves a list of symbols on the kucoin exchange and filters for only USDT pairs

const axios = require('axios');
const sleep = require("./helpers/sleep.js");
const getSymbol = require("./helpers/fnget-symbols.js");



const processSymbols = async () => {
    try {
        console.log("I am inside process symbols function. sleeping...");
        await sleep.fn_sleep(1000);
        console.log("sleep over");
    } catch (err) {
        // Handle Error Here
        console.error(err);
    }
};

console.log("before getSymbol function call");
symbolList = getSymbol.fn_getSymbol();
console.log("after getSymbol function call");
console.log(JSON.stringify(symbolList, null, 4));

console.log("before processSymbols function call");
processSymbols();
console.log("after processSymbols function call");




