const fs = require('fs');
const data = fs.readFileSync('input.txt', 'utf-8').split('\n');

first(data);
second(data);

function first(data) {
    let increment = 0;

    let len = data.length;
    for(var i=1; i<len; i++) 
        if(parseInt(data[i])>parseInt(data[i-1])) 
            increment++;

    console.log(increment);
}

function second(data) {
    let sums = [];
    let increment = 0;
    
    let len = data.length-2;
    for(var i=0; i<len; i++) {
        var tmp = parseInt(data[i]) + parseInt(data[i+1]) + parseInt(data[i+2]);
        sums.push(tmp);
    }

    let len_2 = sums.length;
    for(var i=1; i<len_2; i++) 
        if(sums[i]>sums[i-1]) 
            increment++;

    console.log(increment);
}