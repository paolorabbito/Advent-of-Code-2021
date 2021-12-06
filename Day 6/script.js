const fs = require('fs');
const data =  fs.readFileSync('input.txt', 'utf-8').split(',');
castToInt(data);

first_second(data);

function first_second(data) {
    let fish = [];
    let count = 0;
    fill(data, fish);
    
    for(i=0; i<80; i++) { // 80 for day 1 256 for day 2
        let tmp = fish[0];

        for(j=0; j<8; j++) {
            fish[j] = fish[j+1];
        }
        
        fish[6] += tmp;
        fish[8] = tmp;
    }

    for(i=0; i<9; i++) 
        count += fish[i];
    
    console.log(count);
}

function castToInt(data) {
    let len = data.length;
    for(i=0; i<len; i++) 
        data[i] = parseInt(data[i]);
}

function fill(inp, outp) {
    for(i=0; i<9; i++) 
        outp[i] = 0;

    for(i=0; i<inp.length; i++) 
        outp[inp[i]]++;
}
