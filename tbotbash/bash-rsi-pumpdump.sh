#!/bin/bash

cd ~/tbot

readarray -d "," -t Arr < /home/ubuntu/tbot/data/symbolsList.txt

for i in ${Arr[@]}; do
        node tab-rsi-pumpdump.js $i 15m
        sleep 8
done