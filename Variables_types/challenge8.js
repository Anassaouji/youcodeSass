const prompt = require("prompt-sync")();

let nombre1 = Number(prompt("donne le nombre 1 : "));
let nombre2 = Number(prompt("donne le nombre 2 : "));
let nombre3 = Number(prompt("donne le nombre 3 : "));


let res = (nombre1 * nombre2 * nombre3) ** (1/3);

console.log("la moyenne géométrique  est : " + res);
