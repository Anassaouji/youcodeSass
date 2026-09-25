

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

for(let cle in ventes){
    let produit = ventes[cle].produit;
    let prix = ventes[cle].prix;
    if(compt[produit]){
        compt[produit].nombreDeVentes +=1;
        compt[produit].total +=prix;
    }else{
        compt[produit]={
            nombreDeVentes:1,
            total:prix
        }
    }


}
console.log(compt);

