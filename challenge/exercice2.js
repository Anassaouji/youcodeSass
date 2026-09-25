


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


    for(let cle in ventes){
            let produit = ventes[cle].produit;
            if(compt[produit]){
                compt[produit] +=1;
            }
            else{
                compt[produit] =1;
            }       
    }


console.log(compt);
