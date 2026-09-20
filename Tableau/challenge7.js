const prompt = require("prompt-sync")();


let nbrElement = Number(prompt("ecrit le nombre d'element de Tableau "));

const nombres =[];
let x =0;

for(let i = 0 ; i< nbrElement ; i++){
    let element = Number(prompt("entrer un Element "));
    nombres.push(element);  
}

for(let i =0 ; i<nbrElement ; i++){
    for(let j = i + 1 ; j<nbrElement ; j++){
        if(nombres[i] > nombres[j]){
            x = nombres[i];
            nombres[i] = nombres[j];
            nombres[j] = x;
        }
    }
}


console.log(nombres);