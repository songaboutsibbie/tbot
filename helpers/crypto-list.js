function fn_get_crypto_list(priority) {

// 0 = owned , 1 = highest priority, 2 = second priority

const crypto_list_owned = ["ETH/USDT", "SOL/USDT"]
const crypto_list_one = ["BTC/USDT", "ETH/USDT", "AVAX/USDT", "MANA/USDT", "XRP/USDT", "ADA/USDT", "SOL/USDT", "DOT/USDT", "SHIB/USDT", "NEAR/USDT", "ALGO/USDT", "UNI/USDT", "AXS/USDT", "GMT/USDT", "KSM/USDT", "ENJ/USDT", "BAT/USDT", "STX/USDT", "KAVA/USDT", "MINA/USDT"];
const crypto_list_two = ["KNC/USDT", "POWR/USDT", "TORN/USDT", "VIDT/USDT", "BNX/USDT" ]


if (priority == 0 ) { return crypto_list_owned ; }
else if (priority == 1 ) { return crypto_list_one ; }
else if (priority == 2) { return crypto_list_two ; }
else { return null ; }

}

module.exports = { fn_get_crypto_list } ;

