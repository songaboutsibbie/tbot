cat ./data/symbols.json | tr -d ', ][\t\r"' > ./data/symbol_list.txt

readarray -t Arr < ./data/symbol_list.txt

for i in ${Arr[@]}; do
        printf $i
        printf "\n"
        node v3-orchestrator.js $i 15m
        sleep 1
done