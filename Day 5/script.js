const fs = require('fs');
const data = fs.readFileSync('input.txt', 'utf-8').split(/[->,\s]/).filter(key => key!='');
const maps = createMap();

//first(data);
second(data);


function first(data) {
    let len = data.length/4;

    for(i=0; i<len; i++) {
        let x1 = parseInt(data.shift());
        let y1 = parseInt(data.shift());
        let x2 = parseInt(data.shift());
        let y2 = parseInt(data.shift());
        
        if(x1==x2) 
           drawWithX(x1, y1, y2, maps);
        else if (y1==y2) 
           drawWithY(x1, x2, y1, maps);
        
    }

    console.log(check(maps));
}

function second(data) {
    let len = data.length/4;

    for(i=0; i<len; i++) {
        let x1 = parseInt(data.shift());
        let y1 = parseInt(data.shift());
        let x2 = parseInt(data.shift());
        let y2 = parseInt(data.shift());
        
        if(x1==x2) 
           drawWithX(x1, y1, y2, maps);
        else if (y1==y2) 
           drawWithY(x1, x2, y1, maps);
        else if((x1==y2 && x2==y1) || (x1==y1 && x2==y2) || (x1!=x2 && y1!=y2))
            drawWithDiagonal(x1, x2, y1, y2, maps);   
    }
    
    console.log(check(maps));
}

function drawWithX(x, y1, y2, maps) {
    let line = mapLine(y1, y2);
    let len = line.length;
    
    for(let i=0; i<len; i++) 
        maps[line[i]][x]++;
}

function drawWithY(x1, x2, y, maps) {
    let line = mapLine(x1, x2);
    let len = line.length;
   
    for(let i=0; i<len; i++)
        maps[y][line[i]]++;
}

function drawWithDiagonal(x1, x2, y1, y2, maps) {
    let x = x1;
    let y = y1;

    if(x1<x2 && y1<y2) {
        while(x<=x2) {
            maps[y][x]++;
            y++;
            x++;
        }
    } else if(x1>x2 && y1>y2) {
        while(x>=x2) {
            maps[y][x]++;
            y--;
            x--;
        }        
    } else if(x1<x2 && y1>y2) {
        while(x<=x2) {
            maps[y][x]++;
            y--;
            x++;
        }
    } else if(x1>x2 && y1<y2) {
        while(x>=x2) {
            maps[y][x]++;
            y++;
            x--;
        }
    }
    
}

function createMap() {
    let maps = [];

    for(i=0; i<1000; i++) 
        maps[i] = []; 

    for(i=0; i<1000; i++) 
        for(j=0; j<1000; j++)
            maps[i][j] = 0;

    return maps;    
}

function mapLine(y1, y2) {
    let diff = Math.abs(y1-y2);
    let line = [];
    line.push(Math.min(y1, y2));
    
    for(let i=1; i<=diff; i++)
        line[i] = line[i-1] + 1;

    return line;
}

function check(maps) {
    let count = 0;

    for(let i=0; i<1000; i++) 
        for(let j=0; j<1000; j++) 
            if(maps[i][j]>1)
                count++;
    
    return count;    
}