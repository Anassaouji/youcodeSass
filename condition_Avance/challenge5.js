const prompt = require("prompt-sync")();


let budget = Number(prompt("entrer votre budget : "));
let destination = Number(prompt("entrer votre destination: 1 pour plage, 2 pour montagne, 3 pour ville : "));
let nombrPers = Number(prompt("entrer le nombre de Peresonne : "));


if(budget >= 1000){
    console.log("votre voyage est haut de gamme");
}else if(budget >= 500 && budget <= 1000){
    console.log("votre voyage est Voyage moyen");    
}
else if(budget < 500 ){
    console.log("votre voyage est Voyage économique");  
}

if(budget >= 1000 && nombrPers > 2){
    console.log("votre destination est la plage");
}
else if(budget >=500 && nombrPers <= 2){
    console.log("votre destination est la Montagne");
}
else{
    console.log("votre destination est la ville");
    
}
