// retrieve symbol list from kucoin exchange, parse it for USDT pairs and write to json file

'use strict';

const fs = require('fs');
const axios = require('axios')

const getSymbol = async () => {
    try {
        const resp = await axios.get('https://api.taapi.io/exchange-symbols', {
          headers: { 'Accept-Encoding': 'application/json'},
          params: {
            secret: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjbHVlIjoiNjI2MzVhZjk0MjI0NmNlM2IwNGMzNDJkIiwiaWF0IjoxNjcwMjI5MzYwLCJleHAiOjMzMTc0NjkzMzYwfQ.QVROcNEXCK41L_4-9kcq3RB06s3L0mfFq4ir2MdcTlY",
            exchange: "kucoin",
          }
        });
        let symbolListUSDT = resp.data.filter(a => new RegExp('\/USDT$').test(a));
        console.log(symbolListUSDT);
        console.log(JSON.stringify(symbolListUSDT));
        const jsonString = JSON.stringify(symbolListUSDT);
        fs.writeFileSync('kucoin-symbols.json', jsonString);
    } catch (err) {
        // Handle Error Here
        console.error(err);
    }
};

getSymbol();