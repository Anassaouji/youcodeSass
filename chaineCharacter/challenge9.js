const prompt = require("prompt-sync")();

let text = prompt("entre un chaine de character ");
let nouveauText ="";
console.log(text);


for(let t of text){
    if(t === " "){
        t ="";
    }
    nouveauText += t
}


console.log(nouveauText)


// const tap = text.split("")
// for(let i = 0 ; i< tap.length ; i++){
//     if(tap[i] === " "){
//         tap[i]="";
//     }
// }
// text = tap.join("");