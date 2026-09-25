const prompt = require("prompt-sync")();


let nbrElement = prompt("ecrit le nombre d'element de Tableau ");

const table =[];
let max = 0;

for(let i = 0 ; i< nbrElement ; i++){
    let element = Number(prompt("entrer un Element "));
    table.push(element);
    if(table[i] > max){
        max = table[i];
    }
}
console.log(max);