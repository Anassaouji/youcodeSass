const prompt = require("prompt-sync")();


let nbrElement = prompt("ecrit le nombre d'element de Tableau ");

const table =[];
let min ;

for(let i = 0 ; i< nbrElement ; i++){
    let element = prompt("entrer un Element ");
    table.push(element);
    min = table[0];
    if(table[i] < min){
        min = table[i];
    }
}
console.log(min);