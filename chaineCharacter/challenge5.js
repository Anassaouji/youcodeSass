
let text = "ABCD";

let tt = text.split("");

let t = tt.length - 1;
let x = "";
for(let i = 0 ; i< tt.length / 2 ; i++){
    x= tt[i];
    tt[i] = tt[t];
    tt[t]= x;
    t--;
}
text = tt.join("");

console.log(text);
