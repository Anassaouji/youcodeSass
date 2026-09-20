const prompt = require("prompt-sync")();


let nElement= Number(prompt("entre le nombre d'element d'un tableau "));
const nombres = [];
const paires = [];

for(let i = 0 ; i< nElement ; i++){
    let paire = Number(prompt("entrer un Element "));
    if(paire % 2 === 0)
        nombres.push(paire);
}

console.log(nombres);

// nombres.forEach((nbr)=>{
//     if(nbr % 2 === 0){
//         paires.push(nbr)
//     }
// })
// console.log(paires);
