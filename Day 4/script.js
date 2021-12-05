const fs = require('fs');
const data = fs.readFileSync('input.txt', 'utf-8').split('\n\n');
const draw = data[0].split(',');
data.shift();
const cards = [];
const arrayColumn = (arr, n) => arr.map(x => x[n]);

data.forEach(element => {
    element = element.split(/(?:\n| )+/);
    element = element.filter(key => key!='');
    
    tmp = [];
    for(let i=0; i<5; i++){
        tmp[i] = [];
        for(let j=0; j<5; j++){
            tmp[i][j] = element.shift();
        }
    }
    cards.push(tmp);
});

first(draw, cards)
second(draw, cards)

function first(draw, cards) {
    let len = draw.length;

    for(let i=0; i<len; i++) {
        for (card of cards) {
            let find = cardSearch(card, draw[i]);

            if(find) {
                card[find[0]][find[1]] = 'x';

                if(check(card)) {
                    console.log(sumFirst(card, draw[i])); 
                    return;
                }
            }
        }
    }
}

function second(draw, cards) {
    let len = draw.length;

    for(let i=0; i<len; i++) {
        for (card of cards) {
            let find = cardSearch(card, draw[i]);

            if(find) {
                card[find[0]][find[1]] = 'x';

                if(check(card) && cards.length>1) {
                    cards = cards.filter(key => key!=card);
                } else if(check(card) && cards.length==1) {
                    console.log(sumFirst(card, draw[i]));
                    return;
                }
            }
        }
    }
}

function cardSearch(card, key) {
    index = [];

    for(let i=0; i<5; i++) {
        for(let j=0; j<5; j++) {
            if(card[i][j] === key) {
                index[0] = i;
                index[1] = j;
                return index;
            }
        }
    }

    return false;
}

function check(card) {

    for(let i=0; i<5; i++){
        let tmp = arrayColumn(card, i);

        if(isAllEquals(tmp))
            return true;
    }

    for(let i=0; i<5; i++){
        let tmp = card[i];
        
        if(isAllEquals(tmp))
            return true;
    }

    return false;
}

function isAllEquals(data) {
    let len = data.length;
    
    for(let i=0; i<len; i++) {
        if(data[i]!='x')
            return false;
    }
    return true;
}

function sumFirst(card, extracted){
    let sum = 0;
    
    for(let i=0; i<5; i++) {
        for(let j=0; j<5; j++) {
            if(card[i][j]!='x')
                sum += parseInt(card[i][j]);
        }
    }
    
    return sum*extracted; 
}