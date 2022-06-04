function fn_crypto_list(priority) {


const crypto_list_one = ["BTC/AUD", "ETH/AUD", "AVAX/AUD", "MANA/USDT", "XRP/AUD", "ADA/AUD", "SOL/AUD", "DOT/AUD", "SHIB/AUD", "NEAR/AUD", "ALGO/AUD", "UNI/AUD", "AXS/AUD", "GMT/AUD", "KSM/AUD", "ENJ/AUD", "BAT/AUD", "STXU/SDT", "KAVA/AUD", "MINA/AUD"];
const crypto_list_two = ["KNC/AUD", "POWR/AUD", "TORN/AUD", "VIDT/USDT", "BNX/AUD" ]

if (priority == 1 ) { return crypto_list_one ; }
else if (priority == 2 ) { return crypto_list_two ; }
else { return null ; }


}

module.exports = { fn_crypto_list } ;

