const fs = require('fs');
const data = fs.readFileSync('input.txt', 'utf-8').split(',');

parsing(data);
first(data);
second(data)

function first(data) {
    let len = data.length;
    let min = 999999;

    for(i=0; i<len; i++) {
        let fuel = 0;

        for(j=0; j<len; j++) 
            fuel += Math.abs(data[i] - data[j]); 

        if(fuel<min)
            min = fuel;            
    }

    console.log(min);
}

function second(data) {
    let len = data.length;
    let fuel = 0;
    let average = avg(data).toFixed(0)-1;
    
    for(i=0; i<len; i++) {
        let tmp = Math.abs(data[i]-average);
        for(j=0; j<=tmp; j++)
            fuel += j
    }

    console.log(fuel);
}

function parsing(data) {
    let len = data.length;

    for(i=0; i<len; i++) {
        data[i] = parseInt(data[i]);
    }
}

function avg(data) {
    let len = data.length;
    let sum = 0;

    data.forEach(key => {
        sum+=key;
    });

    return sum/len;
}
