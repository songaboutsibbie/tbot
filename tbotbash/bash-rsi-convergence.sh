#!/bin/bash

cd ~/tbot

readarray -d "," -t Arr < /home/ubuntu/tbot/data/symbolsList.txt

for i in ${Arr[@]}; do
        node tab-rsi-convergence-v1.js $i 1d
        sleep 8
done