const prompt = require("prompt-sync")();

let temperature = Number(prompt("donne moi la temperature : "));

if(temperature < 0 ){
    console.log("la temperature est Solide");
    
}
if(temperature >=0 &&  temperature < 100){
    console.log("la temperature est Liquide");
    
}
if(temperature >= 100 ){
    console.log("la temperature est Gaz");
    
}

