
const ventes = [
  { produit: "PC", prix: 7000 },
  { produit: "Souris", prix: 150 },
  { produit: "PC", prix: 7000 },
  { produit: "Clavier", prix: 300 },
  { produit: "Souris", prix: 150 },
  { produit: "PC", prix: 7000 },
  { produit: "Clavier", prix: 300 },
  { produit: "PC", prix: 100000 },
  { produit: "Clavier", prix: 11000 }
];
const compt ={};
let max1= 0;
let max2= 0;
let produitMax1="";
let produitMax2="";

for(let cle in ventes){
    let produit = ventes[cle].produit;
    if(compt[produit]){
        compt[produit] +=1;
    }else{
        compt[produit] = 1;
    }
}

for(let cle in compt){
    if(compt[cle] > max1){
        max2 =max1;
        max1=compt[cle];
        produitMax1 = cle;
    }
    if(compt[cle] > max2 && compt[cle] <max1){
        max2 = compt[cle];
        produitMax2 = cle;
    }
}


console.log(compt);
console.log(produitMax1 , max1);
console.log(produitMax2 , max2);

