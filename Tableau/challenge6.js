const prompt = require("prompt-sync")();


let nbrElement = Number(prompt("ecrit le nombre d'element de Tableau "));
let multiple = Number(prompt("donne le nombre de multiple :  "));

const nombres =[];

for(let i = 0 ; i< nbrElement ; i++){
    let element = Number(prompt("entrer un Element "));
    nombres.push(element * multiple);
    
}


console.log(nombres);