const prompt = require("prompt-sync")();

let annee = Number(prompt("donnee l'annee : "));
let nbr = Number(prompt("tu vas convertir l'annee ou ?   moi : 1 | Jours :2 | Heures : 3 | Minutes : 4 | Secondes : 5 "));

switch(nbr){
    case 1: console.log(annee * 12);
    break;
    case 2: console.log(annee * 365);
    break;
    case 3: console.log(annee * 365 * 24);
    break;
    case 4: console.log(annee * 365 * 24 * 60);
    break;
    case 5: console.log(annee * 365 * 24 * 60 * 60);
    break;
    
    default:
        console.log("tu as entrer un nombre qui est n'est dans les choix");
        
}