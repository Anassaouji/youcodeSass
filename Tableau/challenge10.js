const prompt = require("prompt-sync")();


let nbrElement = Number(prompt("ecrit le nombre d'element de Tableau "));

const nombres =[];


for(let i = 0 ; i< nbrElement ; i++){
    let element = Number(prompt("entrer un Element "));
    nombres.push(element);  
}

let x = Number(prompt("entrer l'element de recherche"));
let trouve = false;
for(let i = 0 ; i< nbrElement ; i++){
    if(nombres[i] === x){
        trouve = true;        
    }
}

if(trouve){
    console.log("l'element est disponible");  
}
else{
    console.log("l'element n'est pas disponible");
}


