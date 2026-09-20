const prompt = require("prompt-sync")();


let nElement1= Number(prompt("entre le nombre d'element de tableau 1 "));
const t1 = [];
const t2 = [];
const tFosionne = [];

for(let i = 0 ; i< nElement1 ; i++){
    let element = Number(prompt("entrer un Element "));
    t1.push(element);
}

let nElement2= Number(prompt("entre le nombre d'element de tableau 2 "));

for(let i = 0 ; i< nElement2 ; i++){
    let element = Number(prompt("entrer un Element "));
    t2.push(element);
}

console.log(t1);
console.log(t2);

for(let i = 0 ; i< t1.length ; i++){
    tFosionne.push(t1[i]);
}

for(let i = 0 ; i < t2.length ; i++){
    tFosionne.push(t2[i]);
}
console.log(tFosionne);
