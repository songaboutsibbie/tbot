// retrieve symbol list from kucoin exchange, parse it for USDT pairs and write to json file

'use strict';

const fs = require('fs');
const axios = require('axios')
const sort = require("./sort-array.js");

const getSymbol = async () => {
    try {
        const kucoin_response = await axios.get('https://api.taapi.io/exchange-symbols', {
          headers: { 'Accept-Encoding': 'application/json'},
          params: {
            secret: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjbHVlIjoiNjI2MzVhZjk0MjI0NmNlM2IwNGMzNDJkIiwiaWF0IjoxNjcwMjI5MzYwLCJleHAiOjMzMTc0NjkzMzYwfQ.QVROcNEXCK41L_4-9kcq3RB06s3L0mfFq4ir2MdcTlY",
            exchange: "kucoin",
          }
        });

        const binance_response = await axios.get('https://api.taapi.io/exchange-symbols', {
          headers: { 'Accept-Encoding': 'application/json'},
          params: {
            secret: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjbHVlIjoiNjI2MzVhZjk0MjI0NmNlM2IwNGMzNDJkIiwiaWF0IjoxNjcwMjI5MzYwLCJleHAiOjMzMTc0NjkzMzYwfQ.QVROcNEXCK41L_4-9kcq3RB06s3L0mfFq4ir2MdcTlY",
            exchange: "binance",
          }
        });

        let kucoin_symbolListUSDT = kucoin_response.data.filter(a => new RegExp('\/USDT$').test(a));
        let binance_symbolList2USDT = binance_response.data.filter(a => new RegExp('\/USDT$').test(a));
        let merged_symbolList = sort.fn_sortArray(kucoin_symbolListUSDT, binance_symbolList2USDT);

        console.log("**************** kucoin_symbolListUSDT");
        console.log(kucoin_symbolListUSDT);

        console.log("\n**************** binance_symbolList2USDT");
        console.log(binance_symbolList2USDT);

        console.log("\n**************** sorted_symbolList");
        console.log(merged_symbolList);

        //const symbol_jsonString = JSON.stringify(merged_symbolList, null, 1);
        //fs.writeFileSync('./data/symbols.json', symbol_jsonString);

        fs.writeFileSync('./data/raw_symbols.json', merged_symbolList);
    } catch (err) {
        // Handle Error Here
        console.error(err);
    }
};

getSymbol();