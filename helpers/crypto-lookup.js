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
  case 'xrp' :
    return "XRP/AUD" ;
    break;
  case 'ada' :
    return "ADA/AUD" ;
    break;
  case 'sol' :
    return "SOL/AUD" ;
    break;
  case 'dot' :
    return "DOT/AUD" ;
    break;
  case 'shib' :
    return "SHIB/AUD" ;
    break;
  case 'near' :
    return "NEAR/AUD" ;
    break;
  case 'algo' :
    return "ALGO/AUD" ;
    break;
  case 'uni' :
    return "UNI/AUD" ;
    break;
  case 'axs' :
    return "AXS/AUD" ;
    break;
  case 'gmt' :
    return "GMT/AUD" ;
    break;
  case 'ksm' :
    return "KSM/AUD" ;
    break;
  case 'enj' :
    return "ENJ/AUD" ;
    break;
  case 'bat' :
    return "BAT/AUD" ;
    break;
  case 'stx' :
    return "STXU/SDT" ;
    break;
  case 'kava' :
    return "KAVA/AUD" ;
    break;
  case 'mina' :
    return "MINA/AUD" ;
    break;
  case 'knc' :
    return "KNC/AUD" ;
    break;
  case 'powr' :
    return "POWR/AUD" ;
    break;
  case 'torn' :
    return "TORN/AUD" ;
    break;
  case 'vidt' :
    return "VIDT/USDT" ;
    break;
  case 'bnx' :
    return "BNX/AUD" ;
    break;
  default:
    console.log('undefined crypto.');
}



}

module.exports = { fn_crypto_lookup } ;

//const crypto_list = ["BTC/USDT", "ETH/USDT", "SOL/USDT", "ADA/USDT", "AVAX/USDT", "MANA/USDT", "POWR/USDT", ]

//adding  some extra comments in
