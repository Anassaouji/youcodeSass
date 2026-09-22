const prompt = require("prompt-sync")();


let nbrElement = Number(prompt("ecrit le nombre d'element de Tableau "));

const nombres =[];
const inversT = [];


for(let i = 0 ; i< nbrElement ; i++){
    let element = Number(prompt("entrer un Element "));
    nombres.push(element);  
}

let n = nombres.length - 1;
let x = 0;

for(let i = 0 ; i < nombres.length /2 ; i++){
    x= nombres[n];
    nombres[n]= nombres[i];
    nombres[i]= x;
    n--;
}


// for(let i = nombres.length-1 ; i >=0 ; i-- ){
//     inversT.push(nombres[i]);
// }


// const inversT = nombres.reverse();

console.log(nombres);

