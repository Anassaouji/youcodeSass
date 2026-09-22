const prompt = require("prompt-sync")();

let text = prompt("entre un text ");
let text2 = prompt("entre un text ");

let cmpt = 0;
let cmpt2 = 0;

// t : ( index / key )
for(let t in text){
    cmpt++;
}

// t2 : value
for(let t2 of text2){
    cmpt2++;
}

console.log(text);
console.log(cmpt);

console.log(text2);
console.log(cmpt2);

