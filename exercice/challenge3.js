const prompt = require("prompt-sync")();

let n = Number(prompt("entrer le nombre d'element "))

const t1 = [];
const t2 = [];

for(let i = 0 ; i< n ; i++){
    let ele = prompt("entrer un element ");
    t1.push(ele);
    
}

for(let i = 0 ; i < t1.length ; i++ ){
    let nouveau ="";
    for(let j = t1[i].length -1 ; j >= 0 ; j--){
        nouveau += t1[i][j];
    }
    t2.push(nouveau);
}

console.log(t1);
console.log(t2);

