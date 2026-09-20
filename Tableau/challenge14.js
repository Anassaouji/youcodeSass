const prompt = require("prompt-sync")();


let nElement= Number(prompt("entre le nombre d'element d'un tableau "));
const nombres = [];
let moyenne = 0;
let somme =0;

for(let i = 0 ; i< nElement ; i++){
    let element = Number(prompt("entrer un Element "));
    nombres.push(element);
}

console.log(nombres);


for(let i = 0 ; i< nombres.length ; i++){
    somme += nombres[i];
    moyenne = somme / nombres.length;
}

console.log(moyenne);