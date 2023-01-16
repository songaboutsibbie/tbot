#!/bin/bash

cd ~/tbot

readarray -d "," -t Arr < /home/ubuntu/tbot/data/symbolsList.txt

bulklimit=1
for i in ${Arr[@]}; do
        if [ $bulklimit -le 20 ] 
        then
                crypto_array+="$i "
                bulklimit=$(( $bulklimit + 1 ))
        else
                node tab-rsi-bulk.js $crypto_array
                bulklimit=1   
                crypto_array=()
                crypto_array+="$i "
                sleep 2       
        fi        
        
        
done