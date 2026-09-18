const prompt = require("prompt-sync")();



let primeDeBase = 5000;
let age = parseInt(prompt("Age du conducteur : "));
let typeVoiture = parseInt(prompt("Type (1: sportive, 2: utilitaire, 3: familiale) :"));
let accidents = parseInt(prompt("Nombre d'accidents (5 dernieres annees) :"));


if (age < 25) {
    primeDeBase *= 1.5;
} else if (age > 65) {
    primeDeBase *= 1.2;
}

if (typeVoiture === 1) {
    primeDeBase *= 2;
} else if (typeVoiture === 2) {
    primeDeBase *= 1.2;
} else if (typeVoiture === 3) {
    primeDeBase *= 1.1;
}

if (accidents > 1) {
    primeDeBase *= 1.3; // +30%
}

console.log(`Votre prime d'assurance sera de : ${primeDeBase} €`);