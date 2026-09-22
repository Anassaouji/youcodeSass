const prompt = require("prompt-sync")();

let text = prompt("entre un chaine de character ");

let sousString = prompt("entre le sous string a recherche ");

let tap = text.split(" ");

let trouve = false;

for(let i = 0 ; i < tap.length ; i++){
    if(tap[i] === sousString){
        trouve = true;
    }
}

if(trouve){
    console.log("la sous-chaîne est trouvée");
    
}
else{
    console.log("la sous-chaîne n'est pas trouvée");
}

text = tap.join(" ")

console.log(text)