

const t1 = [1,2,3,4,5,4,1,3,7,9,10,10,10,15,21];

const compteur= {};

for(let i = 0 ; i< t1.length ; i++){
    if(compteur[t1[i]]){
        compteur[t1[i]] +=1;
    }
    else{
        compteur[t1[i]] = 1;
    }
}

console.log(compteur);






