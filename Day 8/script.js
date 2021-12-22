const fs = require('fs');
const data = fs.readFileSync('input.txt', 'utf-8').split(/[|,\n]/);

first(data);

function first(data) {
    let count = 0;
    let len = data.length;

    for(i=0; i<len; i++) {
        if(i%2!=0) {
            let tmp = data[i].split(' ');
            tmp.forEach(element => {
                if(element.length==4 || element.length==2 || element.length==3 || element.length==7)
                    count++;
            });
        }
    }
    console.log(count);
}