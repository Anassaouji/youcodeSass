const prompt = require("prompt-sync")();


let nbrElement = Number(prompt("ecrit le nombre d'element de Tableau "));

const nombres =[];


for(let i = 0 ; i< nbrElement ; i++){
    let element = Number(prompt("entrer un Element "));
    nombres.push(element);  
}

console.log(nombres);

let elementRemplacer = Number(prompt("entrer l'element a remplacer "))
let find = false;

for(let i = 0  ; i < nombres.length ; i++){
    if(nombres[i] === elementRemplacer){
        let nouvelNbr = Number(prompt("entrer la nouvelle valeur "))
        nombres[i] = nouvelNbr;
        find = true;
    }
}

if(find === false){
    console.log("votre element n'est trouvable ");
    
}
console.log(nombres);
