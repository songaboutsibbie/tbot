#!/bin/bash

cd ~/tbot

readarray -d "," -t Arr < /home/ubuntu/tbot/data/symbolsShortList.txt
echo  "array read"

for i in ${Arr[@]}; do
        echo  $i : "in loop"
        node tab-rsi-short.js $i 15m
        sleep 8
done