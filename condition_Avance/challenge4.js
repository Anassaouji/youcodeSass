const prompt = require("prompt-sync")();


let score = Number(prompt("entre votre Score "));
let anciennete = Number(prompt("entre votre Anciennete "));
let recompenses = Number(prompt("tu recois combien de Récompenses : 0 pour aucun , 1 pour une et 2 pour 2 et plus "));


if (recompenses === 1){
    score = score + (score * 10 /100 )    
}
else if (recompenses === 2){
    score = score + (score * 20 /100 )    
}

if(score >= 90 && anciennete >=5){
    console.log("Excellente " + score);
}
else if(score >= 75 && anciennete >=3){
    console.log("Bonne " + score);
}
else if(score >= 50 && anciennete < 3){
    console.log("Satisfaisante " + score);
}
else if(score < 50){
    console.log("Insuffisante " + score);
}



