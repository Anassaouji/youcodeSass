
const ventes = [
  { produit: "PC", prix: 7000 },
  { produit: "Ram", prix: 200 },
  { produit: "Ram", prix: 200 },
  { produit: "Ram", prix: 200 },
  { produit: "Souris", prix: 150 },
  { produit: "Ram", prix: 4000 },
  { produit: "PC", prix: 7000 },
  { produit: "PC", prix: 7000 },
  { produit: "Clavier", prix: 300 },
  { produit: "Souris", prix: 150 },
  { produit: "PC", prix: 7000 },
  { produit: "Clavier", prix: 300 },
  { produit: "PC", prix: 100000 },
  { produit: "PC", prix: 114455 },
  { produit: "Clavier", prix: 11000 },
  { produit: "Clavier", prix: 11000 },
  { produit: "Souris", prix: 11000 },
  { produit: "Clavier", prix: 11000 }
];
const compt ={};
let max1= 0;
let max2= 0;
let max3=0;
let produitMax1="";
let produitMax2="";
let produitMax3="";

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
        produitMax2 = produitMax1;
        max1=compt[cle];
        produitMax1 = cle;
    }
    if(compt[cle] > max2 && compt[cle] < max1){
        max3 = max2;
        produitMax3 = produitMax2;
        max2 = compt[cle];
        produitMax2 = cle;
    }
    if(compt[cle] > max3 && compt[cle] < max2){
        max3= compt[cle];
        produitMax3= cle;
    }
    // console.log(cle,compt[cle],max1,max2,max3);
    
}


console.log(compt);
console.log(produitMax1 , max1);
console.log(produitMax2 , max2);
console.log(produitMax3 , max3);

