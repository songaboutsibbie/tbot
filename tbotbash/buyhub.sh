#!/bin/bash

cd ~/tbot
IFS=$'\n' read -d '' -r -a arrCrypto < ~/tbot/data/buylist.txt

for i in "${arrCrypto[@]}"
do
        :
        crypto="$i"
        crypto=`echo $i | sed 's/ *$//g'`
        echo " crypto being passed in is $crypto"
        node buy-order-macd "$crypto"
        sleep 15
done