const prompt = require("prompt-sync")();


let nbr = Number(prompt("entrer un nombre positif : "));

let factorielle = 1;

for(let i = 1 ; i < nbr ; i++ ){
    factorielle *= i;
}
console.log(factorielle);
