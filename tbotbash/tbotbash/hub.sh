#!/usr/bin/env bash
 
cd /home/homestar/tbot
node sell-order-macd.js
sleep 15
node buy-order-macd.js 1
sleep 15
node buy-order-macd.js 2


