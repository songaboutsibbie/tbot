// Retrieves full list of symbols from binance exchange and then filters for only USDT pairs

// Require axios: npm i axios
var axios = require('axios');

axios.get('https://api.taapi.io/exchange-symbols', {
  params: {
    secret: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNvbmdhYm91dHNpYmJpZUBnbWFpbC5jb20iLCJpYXQiOjE2NTA2Nzg1MjEsImV4cCI6Nzk1Nzg3ODUyMX0.kB2EUss32pvD6D3Nv6pg92-ziJ_phjX722Qqx_eHbtU",
    exchange: "binance"
  }
})
.then(function (response) {
  
  let symbolListUSDT = response.data.filter(a => new RegExp('\/USDT$').test(a));
 
  console.log(symbolListUSDT);
})
.catch(function (error) {
  console.log(error.response.data);
});