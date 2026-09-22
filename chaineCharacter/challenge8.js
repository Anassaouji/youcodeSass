const prompt = require("prompt-sync")();

let text = prompt("entre un chaine de character ");
let code = 0;
let nouveautext = "";
console.log(text);

for(let t in text){
    if(text.charCodeAt(t) >= 97 && text.charCodeAt(t) <= 122){
        code = text.charCodeAt(t) -32;
        nouveautext += String.fromCharCode(code);
    }
}

console.log(nouveautext);
