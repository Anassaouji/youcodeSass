const prompt = require("prompt-sync")();

let lettre = prompt("entrer une LETTRE : ").toLowerCase();

switch(lettre){
    case 'a':
    case 'e':
    case 'i':
    case 'o':
    case 'u':
    case 'y':
        console.log(`La lettre "${lettre}" est une voyelle.`);
    break;
    default:
        console.log(`La lettre "${lettre}" n'est pas une voyelle.`)


}