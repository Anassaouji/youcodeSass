const prompt = require("prompt-sync")();


let nombre = Number(prompt("entrer un nombre svp "));

for(let i = 10 ; i > 0 ; i--){
    let res = nombre * i
    console.log(res);
    
}