const prompt = require("prompt-sync")();


let nombre = Number(prompt("entrer un Nombre"));

for(let i = 1; i<=10 ; i++ ){
    console.log(nombre * i);
    
}