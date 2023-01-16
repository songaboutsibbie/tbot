#!/bin/bash

cd ~/tbot

readarray -d "," -t Arr < /home/ubuntu/tbot/data/symbolsShortList.txt

for i in ${Arr[@]}; do
        node tab-rsi-short.js $i 1h
        sleep 8
done