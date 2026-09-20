const prompt = require("prompt-sync")();



let nbr = Number(prompt("entrer un nombre Positif "));
let somme = 0;

for(let i = 1 ; i <= nbr ; i++ ){
    somme += i;
}
console.log(somme);
