function fn_crypto_lookup(crypto) {

switch (crypto) {
  case 'btc':
    return "BTC/AUD" ;
    break;
  case 'eth':
    return "ETH/AUD" ;
    break;
  case 'avax' :
    return "AVAX/AUD" ;
    break;
    case 'mana' :
    return "MANA/USDT" ;
    break;
  default:
    console.log('undefined crypto.');
}



}

module.exports = { fn_crypto_lookup } ;

//const crypto_list = ["BTC/USDT", "ETH/USDT", "SOL/USDT", "ADA/USDT", "AVAX/USDT", "MANA/USDT", "POWR/USDT", ]
