const prompt = require("prompt-sync")();


const t1 = ["test", "youcode", "promotion 2026"];
const t2 =[];

let x = "e";


for(let t of t1){
    let cmpt =0;
    for(let tt of t){
        if(x === tt){
            for(let c of t){
                cmpt++;
            }
            t2.push(cmpt);
            break;
        }
    }
}


console.log(t1);
console.log(t2);
