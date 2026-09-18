const prompt = require("prompt-sync")();

const nbrToatalDeJour = 20;
let nbrJourDeCongeUtilise = Number(prompt("entre le Nombre de jours de conges utilises : "));
let statusEmploye = Number(prompt("ecrit 0 pour temps partiel, 1 pour temps plein : "));
let jourrestant;




if (statusEmploye === 1){
    if( nbrToatalDeJour < nbrJourDeCongeUtilise){
    console.log("Attention vous etes depase les jour accorde");
    }else{
        jourrestant = nbrToatalDeJour - nbrJourDeCongeUtilise;
        console.log("les jour restant est " + jourrestant);
    }
}
else if(statusEmploye === 0){
    let nbrTotalDeJourTepPartiel = nbrToatalDeJour / 2
        if( nbrTotalDeJourTepPartiel < nbrJourDeCongeUtilise){
            console.log("Attention vous etes depase les jour accorde");
        }else{
            jourrestant = nbrTotalDeJourTepPartiel - nbrJourDeCongeUtilise
            console.log("les jour restant est " + jourrestant);
}}

else{
    console.log("status invalid");
    
}