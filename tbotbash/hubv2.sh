#!/usr/bin/env bash
 

readarray -t arrCrypto < ~/tbot/data/cryptolist.txt
echo ${arrCrypto[0]}
echo ${arrCrypto[1]}
echo ${arrCrypto[2]}


node simple-macd-indicator.js "BTC/USDT"