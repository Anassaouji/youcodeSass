const prompt = require("prompt-sync")();

let text = prompt("entre un chaine de character ");
let nouveauText = "";
console.log(text);
let code=0;

for(let t in text){

    if(text.charCodeAt(t) >= 65 && text.charCodeAt(t) <= 90){
        
        code = text.charCodeAt(t) + 32;
        nouveauText += String.fromCharCode(code);
    }

}

console.log(nouveauText);
