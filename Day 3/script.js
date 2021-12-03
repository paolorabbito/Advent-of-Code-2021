const fs = require('fs');
const data = fs.readFileSync('input.txt', 'utf-8').split('\n');

first(data);
second(data);

function first(data) {

    let gamma = '';
    let epsilon = '';

    for(let i=0; i<12; i++) {

        let zero = 0;
        let one = 0;

        data.forEach(element => {
            if(element.charAt(i) == 1)
                one++;
            else    
                zero++;
        });

        if(one > zero) {
            gamma += '1';
            epsilon += '0';
        }
        else {
            gamma += '0';
            epsilon += '1';
        }
    }

    console.log(parseInt(gamma, 2)*parseInt(epsilon, 2));
}

function second(data) {

    let oxy = data;
    let co2 = data;

    for(let i=0; i<12; i++) {        

        if(oxy.length > 1) {
            let zero = 0;
            let one = 0;

            oxy.forEach(element => {
                if(element.charAt(i) == 1)
                    one++;
                else    
                    zero++;
            });

            if(one >= zero) 
                oxy = oxy.filter(word => word.charAt(i) == 1);
            else 
                oxy = oxy.filter(word => word.charAt(i) == 0);
        }

        if(co2.length > 1) {
            let zero2 = 0;
            let one2 = 0;

            co2.forEach(element => {
                if(element.charAt(i) == 1)
                    one2++;
                else    
                    zero2++;
            });

            if(one2 >= zero2) 
                co2 = co2.filter(word => word.charAt(i) == 0);
            else 
                co2 = co2.filter(word => word.charAt(i) == 1);
        }
    }

    console.log(parseInt(oxy[0], 2)*parseInt(co2[0], 2));
}