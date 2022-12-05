#!/bin/bash

cd ~/tbot

arrayCrypto=("EOS/USDT" "ETC/USDT " "BSV/USDT" "BCH/USDT" "ETH/USDT" "BTC/USDT" "ATOM/USDT" "FTM/USDT" "CHR/USDT " "BNB/USDT" "ALGO/USDT" "ADA/USDT" "ARPA/USDT" "CHZ/USDT" "BTT/USDT" "KSM/USDT" "DASH/USDT " "DGB/USDT" "COMP/USDT" "JST/USDT " "DOT/USDT" "CKB/USDT" "FIL/USDT" "AAVE/USDT " "GRT/USDT" "API3/USDT" "FRONT/USDT " "CRV/USDT " "BAT/USDT" "DOGE/USDT" "CAKE/USDT " "AVAX/USDT " "ENJ/USDT" "ANC/USDT" "IOST/USDT " "ANKR/USDT " "FLUX/USDT" "DODO/USDT " "KDA/USDT " "ICP/USDT" "CELO/USDT" "ELON/USDT " "AIOZ/USDT " "AXS/USDT" "CLV/USDT" "IOTX/USDT " "GALA/USDT " "DYDX/USDT " "EGLD/USDT" "HBAR/USDT " "FLOW/USDT " "CTSI/USDT " "ALICE/USDT" "ILV/USDT" "C98/USDT " "INJ/USDT" "AR/USDT" "JASMY/USDT " "ERN/USDT " "AUDIO/USDT " "ENS/USDT" "FXS/USDT" "ANT/USDT " "KAVA/USDT " "IMX/USDT" "IOTA/USDT " "GLMR/USDT " "APE/USDT" "GMT/USDT" "DAR/USDT" "GAL/USDT " "FITFI/USDT " "APT/USDT" "SNX/USDT " "XLM/USDT" "VET/USDT"  "LTC/USDT" "TRX/USDT " "NEO/USDT" "XMR/USDT"  "XEM/USDT" "XTZ/USDT " "ZEC/USDT" "WIN/USDT"  "ONE/USDT" "SXP/USDT " "STX/USDT"  "WAVES/USDT" "ORN/USDT " "MKR/USDT" "LINK/USDT" "UMA/USDT" "SUN/USDT" "YFI/USDT"  "UNI/USDT" "ROSE/USDT " "USDC/USDT " "SUSHI/USDT " "REN/USDT" "LRC/USDT " "THETA/USDT " "QNT/USDT"  "MASK/USDT" "MANA/USDT " "RNDR/USDT " "SAND/USDT" "OMG/USDT" "ZIL/USDT " "WAXP/USDT " "SHIB/USDT" "MATIC/USDT" "OGN/USDT " "MXC/USDT" "PYR/USDT"  "POLS/USDT" "NFT/USDT " "LPT/USDT" "NEAR/USDT" "SOL/USDT" "SLP/USDT " "REQ/USDT" "QI/USDT"   "XPR/USDT" "MOVR/USDT " "WOO/USDT" "STORJ/USDT " "YGG/USDT" "SKL/USDT " "RLC/USDT" "NKN/USDT"  "TLM/USDT" "RUNE/USDT " "SUPER/USDT " "LTO/USDT"  "RSR/USDT" "POND/USDT " "LINA/USDT " "PEOPLE/USDT " "OCEAN/USDT" "SOS/USDT " "USDD/USDT " "OP/USDT" "XRP/USDT")

for crypto in ${arrayCrypto[@]}; do
        printf "******************************************"
        printf "**** Crypto being passed in is $crypto"
        node macd-3pass.js $crypto
        sleep 2
done