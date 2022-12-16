#!/bin/bash

cd ~/tbot

arrayCrypto=("SNX/USDT" "XLM/USDT" "VET/USDT" "EOS/USDT" "ETC/USDT" "LTC/USDT" "TRX/USDT" "BSV/USDT" "NEO/USDT" "BCH/USDT" "ETH/USDT" "BTC/USDT" "XMR/USDT" "ATOM/USDT" "FTM/USDT" "CHR/USDT" "BNB/USDT" "ALGO/USDT" "XEM/USDT" "XTZ/USDT" "ZEC/USDT" "ADA/USDT" "ARPA/USDT" "CHZ/USDT" "WIN/USDT" "BTT/USDT" "ONE/USDT" "SXP/USDT" "KSM/USDT" "DASH/USDT" "DGB/USDT" "STX/USDT" "COMP/USDT" "WAVES/USDT" "ORN/USDT" "MKR/USDT" "JST/USDT" "LINK/USDT" "DOT/USDT" "CKB/USDT" "UMA/USDT" "SUN/USDT" "YFI/USDT" "UNI/USDT" "FIL/USDT" "AAVE/USDT" "ROSE/USDT" "USDC/USDT" "GRT/USDT" "1INCH/USDT" "API3/USDT" "FRONT/USDT" "CRV/USDT" "SUSHI/USDT" "REN/USDT" "LRC/USDT" "THETA/USDT" "QNT/USDT" "BAT/USDT" "DOGE/USDT" "CAKE/USDT" "MASK/USDT" "AVAX/USDT" "ENJ/USDT" "MANA/USDT" "RNDR/USDT" "ANC/USDT" "IOST/USDT" "ANKR/USDT" "SAND/USDT" "FLUX/USDT" "OMG/USDT" "ZIL/USDT" "DODO/USDT" "WAXP/USDT" "SHIB/USDT" "KDA/USDT" "ICP/USDT" "CELO/USDT" "MATIC/USDT" "OGN/USDT" "PYR/USDT" "POLS/USDT" "AIOZ/USDT" "LPT/USDT" "NEAR/USDT" "AXS/USDT" "CLV/USDT" "SOL/USDT" "SLP/USDT" "IOTX/USDT" "GALA/USDT" "REQ/USDT" "XPR/USDT" "MOVR/USDT" "WOO/USDT" "STORJ/USDT" "YGG/USDT" "SKL/USDT" "DYDX/USDT" "RLC/USDT" "EGLD/USDT" "HBAR/USDT" "FLOW/USDT" "NKN/USDT" "CTSI/USDT" "ALICE/USDT" "ILV/USDT" "TLM/USDT" "RUNE/USDT" "C98/USDT" "INJ/USDT" "AR/USDT" "JASMY/USDT" "SUPER/USDT" "LTO/USDT" "ERN/USDT" "AUDIO/USDT" "ENS/USDT" "FXS/USDT" "ANT/USDT" "KAVA/USDT" "RSR/USDT" "IMX/USDT" "POND/USDT" "LINA/USDT" "PEOPLE/USDT" "OCEAN/USDT" "IOTA/USDT" "GLMR/USDT" "APE/USDT" "GMT/USDT" "DAR/USDT" "GAL/USDT" "OP/USDT" "XRP/USDT" "APT/USDT")

for crypto in ${arrayCrypto[@]}; do
        printf "****** Crypto being passed in is $crypto"
        node v2-orchestrator $crypto
        sleep 2
done