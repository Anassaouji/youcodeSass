const prompt = require("prompt-sync")();

let vitesseParHeur = Number(prompt("donne la vitesse par heur : "));

let vitesseParSecond = vitesseParHeur * 0.27778;

console.log("la vitesse par seconde : " + vitesseParSecond);


