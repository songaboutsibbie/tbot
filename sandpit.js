//    retrieves a list of symbols on the kucoin exchange and filters for only USDT pairs

const axios = require('axios');
const sleep = require("./helpers/sleep.js");


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
        console.log(JSON.stringify(symbolListUSDT, null, 4));
        await sleep.fn_sleep(3000);
        console.log("sleep over");
    } catch (err) {
        // Handle Error Here
        console.error(err);
    }
};


getSymbol();

