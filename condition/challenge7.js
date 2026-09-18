const prompt = require("prompt-sync")();




let alphabet = prompt("entre un Alphabet").charCodeAt(0);

if(alphabet >= 65 && alphabet <=90){
    console.log("la Lettre est Majuscule");
}
else{
    console.log("minuscule");
    
}