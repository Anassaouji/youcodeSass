const prompt = require("prompt-sync")();


let nbrElement = Number(prompt("ecrit le nombre d'element de Tableau "));

const nombres =[];

const copie = [];

for(let i = 0 ; i< nbrElement ; i++){
    let element = Number(prompt("entrer un Element "));
    nombres.push(element);  
}

for(let i = 0 ; i< nombres.length ; i++){
    copie.push(nombres[i]);
}

console.log(nombres);
console.log(copie);

