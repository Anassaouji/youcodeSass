


const apprenants =[];

console.log(`
    ** 1. Ajouter** un apprenant (prenom + note), qui devient un objet ajout nau tableau
    ** 2. Afficher** tous les apprenants enregistres
    ** 3. Rechercher** un apprenant par son prenom
    ** 4. Mettre a jour** la note d'un apprenant existant
    ** 5. Supprimer** un apprenant par son prenom
    ** 0. Quitter** le programme
    `);


let contine = false;
while(contine === false){

    let choix = Number(prompt("qul est votre choix : "));
    
    if(choix === 1){
        function ajouter(prenom , note){
            const apprenant = {
                prenom :prenom,
                note:note
            }
            apprenants.push(apprenant);
        }
    }
    else if(choix === 2){
        function Afficher(){
            for(let i = 0 ; i < apprenants.length ; i++){
                console.log(apprenants[i]);
            }
        }
    }
    else if(choix === 2){
        cherche = prompt()
        
    }
}
