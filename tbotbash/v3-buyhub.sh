#cat data/raw_symbols.json | tr ',' '\n' > ./data/symbol_list.txt

echo "v3-buyhub.sh started">>/tmp/cronlog.log

readarray -d "," -t Arr < ./data/symbolsList.txt

for i in ${Arr[@]}; do
        printf $i
        printf "\n"
        node v3-orchestrator.js $i 15m
        sleep 3
done

echo "v3-buyhub.sh finished">>/tmp/cronlog.log