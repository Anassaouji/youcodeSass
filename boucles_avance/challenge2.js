const prompt = require("prompt-sync")();

let n = Number(prompt("entrer un Number "))

for(let ligne=1 ; ligne<= n ; ligne++){
    for(let espace = 1 ; espace <= n - ligne; espace++){
        process.stdout.write(" ");
    }
    for(let etoil = 1; etoil <= 2* ligne -1; etoil++){
        process.stdout.write("*");
    }
    console.log();     
    par 
}