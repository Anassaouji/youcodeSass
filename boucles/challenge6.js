const prompt = require("prompt-sync")();



let nbr = Number(prompt("entre un nombre "));


for(let i = 2 ; i<= nbr * 2 ; i+=2){
    console.log(i);
}