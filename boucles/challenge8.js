const prompt = require("prompt-sync")();


let nbr = Number(prompt("entrer un nombre"));
let x = 0;
let y = 1;

for(let i = 0 ; i<=nbr ; i++){
    console.log(x);
    let res = x + y;

    x = y;
    y  =res; 
}

// 0,1,1,2,3,5,8,13,21,34

// F(0) = 0
// F(1) = 1
// F(2) = F(1) + F(0) = 1
// F(3) = F(2) + F(1) = 2
// F(4) = F(3) + F(2) = 3


// 0
// 1
// 0 + 1 = 1
// 1 + 1 = 2
// 1 + 2 = 3
// 2 + 3 = 5
// 3 + 5 = 8
// 5 + 8 = 13