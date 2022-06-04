//  https://taapi.io/indicators/commodity-channel-index/
//  +100 indicates buy   -100 indicates sell
//  determine when an asset is reaching overbought or oversold
var axios = require('axios');

axios.get('https://api.taapi.io/cci', {
  params: {
    secret: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNvbmdhYm91dHNpYmJpZUBnbWFpbC5jb20iLCJpYXQiOjE2NTA2Nzg1MjEsImV4cCI6Nzk1Nzg3ODUyMX0.kB2EUss32pvD6D3Nv6pg92-ziJ_phjX722Qqx_eHbtU",
    exchange: "binance",
    symbol: "BTC/USDT",
    interval: "1d",
    backtracks: "20",
  }
})
.then(function (response) {
  console.log(response.data);
})
.catch(function (error) {
  console.log(error.response.data);
});
