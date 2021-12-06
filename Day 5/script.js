const fs = require('fs');
const data = fs.readFileSync('input.txt', 'utf-8').split(/[->,\s]/).filter(key => key!='');
const maps = createMap();

first(data);
//second(data);


function first(data) {
    let len = data.length/4;

    for(i=0; i<len; i++) {
        let x1 = data.shift();
        let y1 = data.shift();
        let x2 = data.shift();
        let y2 = data.shift();
        
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
        let x1 = data.shift();
        let y1 = data.shift();
        let x2 = data.shift();
        let y2 = data.shift();
        
        if(x1==x2) 
           drawWithX(x1, y1, y2, maps);
        else if (y1==y2) 
           drawWithY(x1, x2, y1, maps);
        else if((x1==y2 && x2==y1) || (x1==y1 && x2==y2)) 
            drawWithDiagonal(x1, x2, y1, y2, maps);
    }

    console.log(check(maps));
}

function drawWithX(x, y1, y2, maps) {
    let line = mapLine(y1, y2);
    let len = line.length;
    
    for(let i=0; i<len; i++) {

        if(maps[line[i]][x]=='.')
            maps[line[i]][x] = 1;
        else 
            maps[line[i]][x]++;
        
    }
}

function drawWithY(x1, x2, y, maps) {
    let line = mapLine(x1, x2);
    let len = line.length;
   
    for(let i=0; i<len; i++) {
        
        if(maps[y][line[i]]=='.')
            maps[y][line[i]] = 1;
        else
            maps[y][line[i]]++;
        
    }
}

function drawWithDiagonal(x1, x2, y1, y2, maps) {
    let hor = mapLine(x1, x2);
    let ver = mapLine(y1, y2);
    let len = ver.length;

    for(let i=0; i<len; i++) {
        
        if(x1==y2){
            if(maps[ver[i]][hor[len-i-1]]=='.')
                maps[ver[i]][hor[len-i-1]] = 1;
            else
                maps[ver[i]][hor[len-i-1]]++;
        } else {
            if(maps[ver[i]][hor[i]]=='.')
                maps[ver[i]][hor[i]] = 1;
            else
                maps[ver[i]][hor[i]]++;
        }
        
    }
}

function createMap() {
    let maps = [];

    for(i=0; i<10; i++) 
        maps[i] = []; 

    for(i=0; i<10; i++) 
        for(j=0; j<10; j++)
            maps[i][j] = '.';

    return maps;    
}

function mapLine(y1, y2) {
    let diff = Math.abs(y1-y2);
    let line = [];
    line.push(Math.min(y1, y2));
    
    for(let i=1; i<diff; i++)
        line[i] = line[i-1] + 1;

    line[diff] = Math.max(y1, y2);
    return line;
}

function check(maps) {
    let count = 0;

    for(let i=0; i<10; i++) 
        for(let j=0; j<10; j++) 
            if(maps[i][j]>1)
                count++;
    
    return count;    
}