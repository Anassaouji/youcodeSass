const prompt = require("prompt-sync")();

let nbr = Number(prompt("donne moi un nombre : "));

let res = nbr % 2;

if(nbr % 2 === 0){

    console.log("le nombre est pair");
}
else {
    console.log("le nombre est impair");
}


