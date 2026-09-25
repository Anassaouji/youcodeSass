

let s1 ="absdbaaa";
let s2= "aasdabba";
let s3 ="";
let s4= "";
const t1=[];
const t2=[];
let p1=0;
let p2=0;
let compt = 0;
let x1 = 0;
let x2 = 0;
for(let i = 0 ; i<s1.length ;i++){
    p=s1.charCodeAt(i);
    t1.push(p);
}

for(let i = 0 ; i<s2.length ;i++){
    p2=s2.charCodeAt(i);
    t2.push(p2);
}

console.log(t1);
console.log(t2);

for(let i = 0 ; i<t1.length ;i++){
    for(let j= 0 ; j<t1.length -i-1 ; j++){
        if(t1[j] > t1[j+1]){
            x1=t1[j];
            t1[j]= t1[j+1];
            t1[j+1] = x1;
        }
    }
}
for(let i = 0 ; i<t2.length ;i++){
    for(let j= 0 ; j<t2.length -i-1 ; j++){
        if(t2[j] > t2[j+1]){
            x2=t2[j];
            t2[j]= t2[j+1];
            t2[j+1] = x2;
        }
    }
}

for(let i = 0 ; i<t1.length ; i++){
    s3+= String.fromCharCode(t1[i]);
}
for(let i = 0 ; i<t2.length ; i++){
    s4+= String.fromCharCode(t2[i]);
}





console.log(t1);
console.log(t2);

console.log(s3);
console.log(s4);

if(s3 === s4){
    console.log("les deux chaine sont equal");   
}
else{
    console.log("les deux chaine ne sont pas equal");
}

