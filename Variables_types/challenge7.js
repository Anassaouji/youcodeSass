const prompt = require("prompt-sync")();


let note1 = Number(prompt("donne la note 1 : "));
let note2 = Number(prompt("donne la note 2 : "));
let note3 = Number(prompt("donne la note 3 : "));


let res = ((note1 * 2) + (note2 * 3) + (note3 *5)) / 10 ;


console.log("le resultats est : " + res);
