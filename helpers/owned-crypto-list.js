function fn_get_crypto_list(priority) {

// 0 = owned , 1 = highest priority, 2 = second priority

const crypto_list_owned = ["ETH/USDT", "SOL/USDT", "AVAX/USDT", "POWR/USDT"]
return crypto_list_owned;

}

module.exports = { fn_get_crypto_list } ;

