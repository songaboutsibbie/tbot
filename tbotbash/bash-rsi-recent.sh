#!/bin/bash

cd ~/tbot

echo `date` "v3-buyhub.sh started. working directory is" `pwd`>>/tmp/cronlog.log
readarray -d "," -t Arr < /home/ubuntu/tbot/data/symbolsList.txt

echo `date` "v3-buyhub.sh symbolList read. Now Looping through array">>/tmp/cronlog.log
echo "array contents are" ${Arr[*]}>>/tmp/cronlog.log

for i in ${Arr[@]}; do
        echo `date` $i : "in loop">>/tmp/cronlog.log
        node tab-rsi-recent.js $i 15m
        sleep 3
done

 echo `date` "v3-buyhub.sh finished">>/tmp/cronlog.log