'use strict';

const fs = require('fs');

let rawdata = fs.readFileSync('kucoin-symbols.json');
let symbolList = JSON.parse(rawdata);

console.log(symbolList);

  for (let i=0; i < symbolList.length; i++) {
    //console.log("checking whether " + result[i].result.valueMACD + " < " + result[i-1].result.valueMACD); // debug log
    console.log(symbolList[i]);
}
