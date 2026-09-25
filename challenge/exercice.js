
const t1 = [1,2,3,10,15,21,200,140];

let max1= 0;
let max2= 0;
for(let i= 0 ; i<t1.length; i++){
    if(t1[i] > max1){
        max2=max1;
        max1 = t1[i];
    }
    if(t1[i] > max2 && t1[i] < max1 ){
        max2= t1[i];
    }
}

console.log(max1);
console.log(max2);
