const fs = require('fs');
const data = fs.readFileSync('input.txt', 'utf-8').split('\n');

console.log(first(data))
console.log(second(data))

function first(data) {
    let increment = 0;

    for(var i=1; i<data.length; i++) {
        if(parseInt(data[i])>parseInt(data[i-1])) 
            increment++;
    }

    return increment;
}

function second(data) {
    let sums = [];
    let increment = 0;

    for(var i=0; i<data.length-2; i++) {
        var tmp = parseInt(data[i]) + parseInt(data[i+1]) + parseInt(data[i+2]);
        sums.push(tmp);
    }

    for(var i=1; i<sums.length; i++) {
        if(sums[i]>sums[i-1]) 
            increment++;
    }

    return increment;
}