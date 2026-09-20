const prompt = require("prompt-sync")();


let nbrElement = prompt("ecrit le nombre d'element de Tableau ");

const table =[];
let max ;

for(let i = 0 ; i< nbrElement ; i++){
    let element = prompt("entrer un Element ");
    table.push(element);
    max = table[0];
    if(table[i] > max){
        max = table[i];
    }
}
console.log(max);