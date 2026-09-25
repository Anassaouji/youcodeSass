const prompt = require("prompt-sync")();



const candidats = [
    {
        cin: "AB123456",
        nom: "Boushaba",
        prenom: "Soufiane",
        partiPolitique: "Independant",
        age: 40,
        electeurs: ["EL100001", "EL100002"]
    },
    {
        cin: "CD234567",
        nom: "Alaoui",
        prenom: "Yassine",
        partiPolitique: "Parti Social",
        age: 45,
        electeurs: ["EL100003", "EL100004", "EL100005", "EL100006"]
    },
    {
        cin: "EF345678",
        nom: "Bennani",
        prenom: "Imane",
        partiPolitique: "Parti Democratique",
        age: 38,
        electeurs: ["EL100007", "EL100008", "EL100009"]
    },
    {
        cin: "GH456789",
        nom: "El Mansouri",
        prenom: "Omar",
        partiPolitique: "Independant",
        age: 52,
        electeurs: [
            "EL100010",
            "EL100011",
            "EL100012",
            "EL100013",
            "EL100014",
            "EL100015"
        ]
    },
    {
        cin: "IJ567890",
        nom: "Tazi",
        prenom: "Sara",
        partiPolitique: "Parti Social",
        age: 35,
        electeurs: ["EL100016"]
    },
    {
        cin: "KL678901",
        nom: "Chraibi",
        prenom: "Mehdi",
        partiPolitique: "Parti Democratique",
        age: 47,
        electeurs: [
            "EL100017",
            "EL100018",
            "EL100019",
            "EL100020",
            "EL100021"
        ]
    },
    {
        cin: "MN789012",
        nom: "Fassi",
        prenom: "Nadia",
        partiPolitique: "Independant",
        age: 42,
        electeurs: ["EL100022", "EL100023", "EL100024", "EL100025"]
    },
    {
        cin: "OP890123",
        nom: "Benjelloun",
        prenom: "Ayoub",
        partiPolitique: "Parti Social",
        age: 50,
        electeurs: [
            "EL100026",
            "EL100027",
            "EL100028",
            "EL100029",
            "EL100030",
            "EL100031",
            "EL100032"
        ]
    },
    {
        cin: "HH12454",
        nom: "Benjelloun",
        prenom: "Dohi",
        partiPolitique: "Parti Social",
        age: 35,
        electeurs: ["EL100033", "EL100034", "EL100035"]
    }
];



let choix;
do{
    console.log(`
    =================================
            MENU DE CHOIX
    =================================
    1. Ajouter un nouveau candidat
    2. Ajouter plusieurs candidats à la fois
    3. Afficher la liste des candidats
    4. Voter pour un candidat
    5. Modifier les informations d'un candidat
    6. Supprimer un candidat
    7. Rechercher des candidats
    0. Quitter
    =================================
    =================================
    `);
    choix = Number(prompt("Votre choix S'il vous plait : "));

    switch(choix){
        case 1 :AjouterCandidat();
            break;        
        case 2 :ajouterPlusieursCandidats();
            break;
        case 3 :afficherListeCandidats();
            break;
        case 4 :VoterCandidat();
            break;
        case 5 :modifierInformationsCandidat();
            break;
        case 6 :supprimerCandidat();
            break;
        case 7 :rechercherCandidats();
            break;
        case 0 :console.log(`
            Au revoire 😊 : `);
            statistiques();
            break;
        default:
            console.log("choix incorrect !");
    }
    
}
while(choix !== 0)



function AjouterCandidat(){
    let cinCandidat = prompt("entre votre CIN s'il vous plait ");

    let trouve = false;
    for(let candide of candidats){     
        if(candide.cin === cinCandidat){
            trouve = true;                              
            break;
        }
    }
    if(trouve){
        console.log("candidat deja inscrit ");
    }
    else{
        let nomCondidat = prompt("Entrer Votre Nom S'il vous plait ");
        let prenomCandidat = prompt("Entrer Votre Prenom S'il vous plait ");
        let partiPolitique = prompt("Entrer Votre Partie Politique S'il vous plait ") || "Independant";
        let ageCandidat = Number(prompt("Entrer Votre Age S'il vous plait "));

        const candidat = {
        cin:cinCandidat,
        nom : nomCondidat,
        prenom : prenomCandidat,
        partiPolitique : partiPolitique,
        age: ageCandidat,
        electeurs: []
        };

        candidats.push(candidat);
        console.log("Candidat ajouter avec sucess");

    }
}



function ajouterPlusieursCandidats(){
    let nombreCandidats = Number(prompt("Entre le nombre de Candidat A Ajouter par fois "));

    for(let i = 0 ; i < nombreCandidats ; i++){
        AjouterCandidat();
    }
}


function afficherListeCandidats(){
    console.log(`
        1. Afichage Simple
        2. Trier les candidats par nombre de votes (ordre décroissant pour voir les gagnants)
        3. Filtrer et afficher uniquement les candidats d'un parti politique spécifique
        `);         
    let choixDafiche = Number(prompt("Entrer Votre Choix S'il vous plait "))
    if(choixDafiche === 1){
        for(let candidat of candidats){
            console.log(`
                Identifiant : ${candidat.cin} → nom : ${candidat.nom} → prenom : ${candidat.prenom}
                → Parite Politique : ${candidat.partiPolitique} → Age : ${candidat.age} → Nombre de Votes : ${candidat.electeurs.length}
                `);       
        }
    }
    else if(choixDafiche === 2){
        triBuble(candidats);
        // let nVotes= {};
        // for(let i = 0; i < candidats.length ; i++){
        //     for(let j = 0 ; j < candidats.length -i -1 ; j++){
        //         if(candidats[j].electeurs.length < candidats[j+1].electeurs.length){
        //             nVotes = candidats[j];
        //             candidats[j] = candidats[j+1];
        //             candidats[j+1] = nVotes;
        //         }
        //     }
        // }       
        for(let candidat of candidats){
            console.log(`
                Identifiant : ${candidat.cin} → nom : ${candidat.nom} → prenom : ${candidat.prenom}
                → Parite Politique : ${candidat.partiPolitique} → Age : ${candidat.age} → Nombre de Votes : ${candidat.electeurs.length}
                `);       
        }
    }
    else if(choixDafiche === 3){
        let partPolitique = prompt("Entrer la partie politique que tu recherche ");
        let exist = false;
        for(let candidat of candidats){
            if(candidat.partiPolitique === partPolitique){
                    console.log(`
                Identifiant : ${candidat.cin} → nom : ${candidat.nom} → prenom : ${candidat.prenom}
                → Parite Politique : ${candidat.partiPolitique} → Age : ${candidat.age} → Nombre de Votes : ${candidat.electeurs.length}
                `);  
                exist = true;
            }
        }
        if(exist === false){
            console.log("Part politique introuvable");
        }
    }
    else{
        console.log("choix incorect");
    }  
}


function VoterCandidat(){
    let cinElecteur = prompt("Saisir Votre CIN s'il vous plait ");
    for(let candidat of candidats){
        for(let cle of candidat.electeurs){
            if(cinElecteur === cle){
                console.log("Vous avez deja vote et vous n'avez pas le droit de modifier votre vote ni de voter a nouveau");
                return;                
            }
        }
    }
    let cinCandidat = prompt("Entrer le CIN de Candidat pour le Voter ");
    let find= false;
    for(let candidat of candidats){
        if(cinCandidat === candidat.cin){
            candidat.electeurs.push(cinElecteur);
            console.log("Votre vote a ete enregistre avec succes");
            find = true;
            break;
        }
    }
    if(!find){
        console.log("Candidat introuvable");
    }
}



function modifierInformationsCandidat(){
    let cinCandidat = prompt("Entre votre CIN pour Modifier vous informations ");
    let trouve = false;
    for(let candidat of candidats){
        if(cinCandidat === candidat.cin){
            trouve =true;
            console.log("1. Modifier la parti politique d'un candidat.");        
            console.log("2. Modifier l'age d'un candidat.");        
            let choice = Number(prompt("Entrer VOtre Choix "));
            if(choice === 1){
                let npartPolitique= prompt("entre votre nouveau partie Politique ");
                candidat.partiPolitique = npartPolitique;
                console.log("votre Partie politique est modifier avec succes");
            }
            else if(choice === 2){
                let nouveauAge= Number(prompt("entre votre nouveau age "));
                candidat.age = nouveauAge;
                console.log("votre age est modifier avec succes");               
            }
            else{
                console.log("choix incorect");               
            }
            break;
        }
    }
    if(!trouve){
        console.log("Candidat introuvable ");        
    }
}


function supprimerCandidat(){
    let cinCandidat = prompt("Entre Votre CIN ");
    let trouve = false;

    for(let candidat in candidats){
        if(cinCandidat === candidats[candidat].cin){
            candidats.splice(candidats[candidat],1);
            console.log("Candidat supprimer avec succes");            
            trouve = true;
            break;
        }
    }
    if(!trouve){
        console.log("candidat introuvable");
        
    }
}

function rechercherCandidats(){
    let nomCandidat = prompt("Entre Votre nom pour rechercher : ");
    let trouve = false;
    for(let candidat of candidats){
        if(nomCandidat === candidat.nom){
            console.log(candidat);
            trouve=true;         
        }
    }
    if(!trouve){
        console.log("Candidat introuvable");
        
    }

}


function statistiques(){
    console.log("le nombre de candidats est : " + candidats.length);
    let count = 0;
    for(let candidat of candidats){
        count += candidat.electeurs.length;
    }
    console.log("le nombre total de votes exprimés " + count);

    if(candidats.length >=3){
       triBuble(candidats);
       for(let i =0; i<3 ; i++){
            console.log(`le Top ${i+1}
                Identifiant : ${candidats[i].cin} → nom : ${candidats[i].nom} → prenom : ${candidats[i].prenom}
                → Parite Politique : ${candidats[i].partiPolitique} → Age : ${candidats[i].age} 
                → Nombre de Votes : ${candidats[i].electeurs.length}
                `);      
        }
    }
    else{
        triBuble(candidats);
        for(let candidat of candidats){
            console.log(`
                Identifiant : ${candidat.cin} → nom : ${candidat.nom} → prenom : ${candidat.prenom}
                → Parite Politique : ${candidat.partiPolitique} → Age : ${candidat.age} → Nombre de Votes : ${candidat.electeurs.length}
                `);       
        }
    }
    const resultats ={};
    for(let candidat of candidats){
        if(resultats[candidat.partiPolitique]){
            resultats[candidat.partiPolitique]+=1;
        }
        else{
            resultats[candidat.partiPolitique] = 1;
        }
    }
    console.log(resultats);
    

}

function triBuble(candidats1){
    let trim = candidats1[0];
    for(let i =0 ; i< candidats1.length ; i++){
        for(let j = 0 ; j< candidats1.length - i-1 ; j++){
            if(candidats[j].electeurs.length < candidats[j+1].electeurs.length){
                trim = candidats1[j];
                candidats1[j] = candidats1[j+1];
                candidats1[j+1] = trim;
            }
        }
    }
}