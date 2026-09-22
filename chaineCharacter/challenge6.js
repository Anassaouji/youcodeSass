const prompt = require("prompt-sync")();


let text = prompt("Entrer un chaine de Character ");
let chr = prompt("enter un character ");
let cmpt = 0;


for(let i = 0 ; i<text.length ; i++){
    if(text[i] === chr){
        cmpt++
    }
}

console.log(cmpt);
