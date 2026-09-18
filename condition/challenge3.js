const prompt = require("prompt-sync")();

let nbr1 = Number(prompt("donner un nombre : "));
let nbr2 = Number(prompt("donner un nombre : "));

let somme = nbr1 + nbr2 ;

if (nbr1 === nbr2){
    console.log(somme * 3);
    
}
else{
    console.log("les resultat est : " + somme);
    
}
