const prompt = require("prompt-sync")();


let nElement= Number(prompt("entre le nombre d'element d'un tableau "));
const nombres = [];

for(let i = 0 ; i< nElement ; i++){
    let impaire = Number(prompt("entrer un Element "));
    if(impaire % 2 !== 0)
        nombres.push(impaire);
}

console.log(nombres);