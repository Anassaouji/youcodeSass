const prompt = require("prompt-sync")();

let revenu = Number(prompt("le Revenu svp"));
let score = Number(prompt("le score svp"));
let duree  = Number(prompt("la duree svp"));

if(revenu >= 30000 && score >= 10000 && duree <=10){
    console.log("Éligible");
}
else if (revenu >= 30000 && score >= 650 && duree <= 15) {
    console.log("Éligible avec conditions");
} 
else {
    console.log("Non éligible");
}