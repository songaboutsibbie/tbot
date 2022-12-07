//    retrieves a list of symbols on the kucoin exchange and filters for only USDT pairs

const axios = require('axios');
const sleep = require("./helpers/sleep.js");
const getSymbol = require("./helpers/fnget-symbols.js");


symbolList = getSymbol.fn_getSymbol();
console.log(JSON.stringify(symbolList, null, 4));
await sleep.fn_sleep(3000);
console.log("sleep over");



