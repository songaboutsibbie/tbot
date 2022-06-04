// https://taapi.io/documentation/integration/direct/
//
//
// Require axios: npm i axios
var axios = require('axios');

axios.get('https://api.taapi.io/3blackcrows', {
  params: {
    secret: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNvbmdhYm91dHNpYmJpZUBnbWFpbC5jb20iLCJpYXQiOjE2NTA2Nzg1MjEsImV4cCI6Nzk1Nzg3ODUyMX0.kB2EUss32pvD6D3Nv6pg92-ziJ_phjX722Qqx_eHbtU",
    exchange: "binance",
    symbol: "BTC/USDT",
    interval: "1d",
    backtracks: 10,
  }
})
.then(function (response) {
  console.log(response.data);
})
.catch(function (error) {
  console.log(error.response.data);
});
