const prompt = require("prompt-sync")();


let nbrElement = prompt("ecrit le nombre d'element de Tableau ");

const table =[];

for(let i = 0 ; i< nbrElement ; i++){
    let element = prompt("entrer un Element");
    table.push(element);
}
console.log(table);


