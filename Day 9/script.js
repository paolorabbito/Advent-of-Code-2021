const fs = require('fs');
const tmp = fs.readFileSync('input.txt', 'utf-8').split('\n');
const data = parsing(tmp);

first(data);

function first(data) {
    let h = data.length;
    let w = data[0].length;
    let risk = 0;
    
    for(i=0; i<h; i++) {
        for(j=0; j<w; j++) {
            //check inside
            if(i>0 && j>0 && i<h-1 && j<w-1) 
                if(data[i][j]<data[i][j-1] && data[i][j]<data[i][j+1] && data[i][j]<data[i-1][j] && data[i][j]<data[i+1][j])
                    risk += data[i][j]+1;
            //check corner
            if(i==0 && j==0)
                if(data[i][j]<data[i][j+1] && data[i][j]<data[i+1][j])
                    risk += data[i][j]+1;
                
            
            if(i==0 && j==w-1)
                if(data[i][j]<data[i][j-1] && data[i][j]<data[i+1][j])
                    risk += data[i][j]+1;
                

            if(i==h-1 && j==0)
                if(data[i][j]<data[i][j+1] && data[i][j]<data[i-1][j])
                    risk += data[i][j]+1;
                   
            if(i==h-1 && j==w-1)
                if(data[i][j]<data[i][j-1] && data[i][j]<data[i-1][j])
                    risk += data[i][j]+1;
            
            //check side
            if(i==0 && j!=0 && j!=w-1)
                if(data[i][j]<data[i][j+1] && data[i][j]<data[i+1][j] && data[i][j]<data[i][j-1])
                    risk += data[i][j]+1;                

            if(j==0 && i!=0 && i!=h-1)
                if(data[i][j]<data[i][j+1] && data[i][j]<data[i-1][j] && data[i][j]<data[i+1][j])
                    risk += data[i][j]+1;
                   
            if(i==h-1 && j!=0 && j!=w-1)
                if(data[i][j]<data[i][j-1] && data[i][j]<data[i-1][j] && data[i][j]<data[i][j+1])
                    risk += data[i][j]+1;
            
            if(j==w-1 && i!=0 && i!=h-1)
                if(data[i][j]<data[i][j-1] && data[i][j]<data[i-1][j] && data[i][j]<data[i+1][j])
                    risk += data[i][j]+1;
        }
    }

    console.log(risk);
}

function parsing(data) {
    let h = data.length;
    let w = data[0].length;
    let maps = createMaps(h);

    for(i=0; i<h; i++) 
        for(j=0; j<w; j++)
            maps[i][j] = parseInt(data[i][j]);

    return maps;
}

function createMaps(x) {
    let maps = [];

    for(i=0; i<x; i++)
        maps[i] = [];

    return maps;
}