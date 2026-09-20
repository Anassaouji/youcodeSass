const prompt = require("prompt-sync")();

let base = Number(prompt("entrer un nombre "));
let exposant = Number(prompt("entre le nombre puissant "));

let res =1;

for(i=1; i<= exposant ; i++){
    res *= base
}
console.log(res);
