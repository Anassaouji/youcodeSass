const prompt = require("prompt-sync")();

let n = Number(prompt("entrer le nombre d'element "))

const t1 = [];
const t2 = [];

for(let i = 0 ; i< n ; i++){
    let ele = prompt("entrer un element ");
    t1.push(ele);
    
}
let ele = prompt("entre un charachter pour rechercher ")
for(let i = 0 ; i < t1.length ; i++){
    for(let j = 0 ; j < t1[i].length ; j++){
        if(ele === t1[i][j]){
            t2.push(t1[i]);
            break;
        }
    }
}
console.log(t1);
console.log(t2);
