const prompt = require("prompt-sync")();

// const person ={
//     nom :"ANASS",
//     prenom : "Sass",
//     age : 26
// };




// console.log(person.nom);
// console.log(person.prenom);
// console.log(person.age);


// const person = { 
//  nom : "Hamza", 
//  age : 25, 
//  ville : "Safi",
//  metier : "Devloper"
// };

// for(let cle in person){
//     console.log(cle, person[cle]);  
// }

// Comment Modifier :
// person.age = 30 ;

// Comment Ajouter :
// person.genre = "M"; 

// Comment Supprimer :
// delete person.metier;


// const person = {
//     prenom: "Ilyas",
//     age: 23,

//     adresse: {
//         ville: "Safi",
//         codePostal: "46000"
//     }
// };


// for(let cle in person){
//     console.log(cle, person[cle]);  
// }


// console.log(person.prenom);

// console.log(person.adresse.ville);




const etudiants = [
    { prenom: "Sara", note: 15 },
    { prenom: "Ali", note: 9 },
    { prenom: "Karim", note: 17 }
];


// l'element 0 du tableau
console.log(etudiants[0]);


// le prenom de l'element 1 du tableau
console.log(etudiants[1].prenom);





for(let etudiant of etudiants){
    for(let cle in etudiant){
        console.log(cle,etudiant[cle]);
        
    }
}











