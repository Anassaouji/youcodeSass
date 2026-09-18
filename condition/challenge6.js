const prompt = require("prompt-sync")();

let nbr = Number(prompt("donnee un nombre : "));

if(nbr > 0){
    console.log("le nombre est positiv");
}
else if(nbr < 0){
    console.log("le nombre est negativ");
}
else{
    console.log("le nombre est null");
}