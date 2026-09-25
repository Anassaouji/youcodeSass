

const ventes = [
  { produit: "PC", prix: 7000 },
  { produit: "Souris", prix: 150 },
  { produit: "PC", prix: 7000 },
  { produit: "Clavier", prix: 300 },
  { produit: "Souris", prix: 150 },
  { produit: "PC", prix: 7000 },
  { produit: "Clavier", prix: 300 }
];
const compt ={};
let max= 0;
let produitMax="";
for(let cle in ventes){
    let produit = ventes[cle].produit;
    if(compt[produit]){
        compt[produit] +=1;
    }
    else{
        compt[produit] =1;    
    }
}
for(let cle in compt){
    if(compt[cle] > max){
        max = compt[cle];
        produitMax =cle;
    }
}


console.log(compt);
console.log(produitMax , max);

