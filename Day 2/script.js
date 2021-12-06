const fs = require('fs');
const data = fs.readFileSync('input.txt', 'utf-8').split('\n');

first(data);
second(data);


function first(data) {
    let depth = 0;
    let horizontal = 0;

    data.forEach(line => {
        let keys = line.split(' ');
        switch (keys[0]) {
            case 'up':
                depth -= parseInt(keys[1]);
                break;  

            case 'down':
                depth += parseInt(keys[1]);
                break;

            default:
                horizontal += parseInt(keys[1]);
                break;
        }
    });

    console.log(depth*horizontal);
}

function second(data) {
    let aim = 0;
    let horizontal = 0;
    let depth = 0;

    data.forEach(line => {
        let keys = line.split(' ');
        switch (keys[0]) {
            case 'up':
                aim -= parseInt(keys[1]);
                break;  

            case 'down':
                aim += parseInt(keys[1]);
                break;

            default:
                horizontal += parseInt(keys[1]);
                depth += parseInt(keys[1])*aim;
                break;
        }
    });

    console.log(depth*horizontal);
}