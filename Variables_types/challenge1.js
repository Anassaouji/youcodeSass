const prompt = require("prompt-sync")();

let nom;
let prenom;
let age;
let sex;
let adresseEmail;

nom = prompt("Entrer votre Nom svp : ");
prenom = prompt("Entrer votre prenom svp : ");
age = prompt("Entrer votre age svp : ");
sex = prompt("Entrer votre sex svp : ");
adresseEmail = prompt("Entrer votre adresse email svp : ");

console.log("bonjour " + nom + prenom + "votre age est " + age + "vous etes " + sex + "et votre adrese email " + adresseEmail);