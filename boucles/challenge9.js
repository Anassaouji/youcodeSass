
const prompt = require("prompt-sync")();

let chiffre = Number(prompt("Entre un chiffre : "));

let cmpt = 0;
let res =chiffre;
while(res > 0){
    res = Math.floor(res / 10);
    cmpt++;
}

console.log(cmpt);
