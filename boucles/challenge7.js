const prompt = require("prompt-sync")();

let chiffre = Number(prompt("Entre un chiffre : "));

let rec = 0;
let rest = chiffre;

while (rest > 0) {

    let dernierChiffre = rest % 10;

    rec = rec * 10 + dernierChiffre;

    rest = Math.floor(rest / 10);
}

console.log(rec);




