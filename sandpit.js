//    retrieves a list of symbols on the kucoin exchange and filters for only USDT pairs

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
        console.log("about to return filtered list");
        return = resp.data.filter(a => new RegExp('\/USDT$').test(a));
    } catch (err) {
        // Handle Error Here
        console.error(err);
    }
};

console.log("before get symbol");
cryptoList = getSymbol();
console.log("after get symbol");

for (let i=0; i > cryptoList.length; i++) {
    console.log("inside a for loop");
    console.log(cryptoList[i]);
}
