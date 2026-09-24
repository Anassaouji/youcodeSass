const prompt = require("prompt-sync")();


const trips = [
    {
        id: 1,
        departure: "Safi",
        destination: "Youssoufia",
        departureTime: "07:30",
        arrivalTime: "08:30",
        price: 25,
        availableSeats: 50
    },
    {
        id: 2,
        departure: "Safi",
        destination: "Marrakech",
        departureTime: "08:00",
        arrivalTime: "10:30",
        price: 90,
        availableSeats: 50
    },
    {
        id: 3,
        departure: "Safi",
        destination: "Casablanca",
        departureTime: "09:00",
        arrivalTime: "13:00",
        price: 140,
        availableSeats: 50
    },
    {
        id: 4,
        departure: "Youssoufia",
        destination: "Marrakech",
        departureTime: "09:15",
        arrivalTime: "11:00",
        price: 65,
        availableSeats: 50
    },
    {
        id: 5,
        departure: "Youssoufia",
        destination: "Casablanca",
        departureTime: "10:00",
        arrivalTime: "13:30",
        price: 110,
        availableSeats: 50
    },
    {
        id: 6,
        departure: "Marrakech",
        destination: "Casablanca",
        departureTime: "11:30",
        arrivalTime: "14:30",
        price: 120,
        availableSeats: 50
    },
    {
        id: 7,
        departure: "Marrakech",
        destination: "Rabat",
        departureTime: "12:00",
        arrivalTime: "16:00",
        price: 150,
        availableSeats: 50
    },
    {
        id: 8,
        departure: "Casablanca",
        destination: "Rabat",
        departureTime: "14:00",
        arrivalTime: "15:15",
        price: 40,
        availableSeats: 50
    },
    {
        id: 9,
        departure: "Casablanca",
        destination: "Kenitra",
        departureTime: "15:00",
        arrivalTime: "16:45",
        price: 55,
        availableSeats: 50
    },
    {
        id: 10,
        departure: "Rabat",
        destination: "Kenitra",
        departureTime: "16:00",
        arrivalTime: "16:45",
        price: 30,
        availableSeats: 50
    },
    {
        id: 11,
        departure: "Rabat",
        destination: "Fes",
        departureTime: "17:00",
        arrivalTime: "19:30",
        price: 95,
        availableSeats: 50
    },
    {
        id: 12,
        departure: "Kenitra",
        destination: "Fes",
        departureTime: "17:30",
        arrivalTime: "20:00",
        price: 85,
        availableSeats: 50
    },
    {
        id: 13,
        departure: "Fes",
        destination: "Meknes",
        departureTime: "08:30",
        arrivalTime: "09:20",
        price: 35,
        availableSeats: 50
    },
    {
        id: 14,
        departure: "Fes",
        destination: "Oujda",
        departureTime: "10:00",
        arrivalTime: "13:30",
        price: 130,
        availableSeats: 50
    },
    {
        id: 15,
        departure: "Meknes",
        destination: "Rabat",
        departureTime: "11:00",
        arrivalTime: "13:30",
        price: 80,
        availableSeats: 50
    },
    {
        id: 16,
        departure: "Meknes",
        destination: "Casablanca",
        departureTime: "12:00",
        arrivalTime: "15:00",
        price: 105,
        availableSeats: 50
    },
    {
        id: 17,
        departure: "Casablanca",
        destination: "El Jadida",
        departureTime: "16:30",
        arrivalTime: "18:00",
        price: 50,
        availableSeats: 50
    },
    {
        id: 18,
        departure: "El Jadida",
        destination: "Safi",
        departureTime: "18:30",
        arrivalTime: "20:30",
        price: 60,
        availableSeats: 50
    },
    {
        id: 19,
        departure: "Marrakech",
        destination: "Agadir",
        departureTime: "15:00",
        arrivalTime: "18:30",
        price: 100,
        availableSeats: 50
    },
    {
        id: 20,
        departure: "Agadir",
        destination: "Safi",
        departureTime: "19:00",
        arrivalTime: "22:00",
        price: 95,
        availableSeats: 50
    }
];

const tickets = [];

const ticketAnulle =[];

let idTicket=1;

let choix;
do{
    choix = Number(prompt(`=================================
                RAILWAY MANAGER
                =================================
                1. Afficher les trajets
                2. Acheter un ticket
                3. Afficher les tickets
                4. Annuler un ticket
                5. Rechercher un ticket
                6. Filtrer les trajets
                7. Trier les trajets
                0. Quitter
                Votre choix : `));

    switch(choix){
        case 1 :AfficherTrajets();
            break;        
        case 2 :acheterTicket();
            break;
        case 3 :AfficherTickets(tickets);
            break;
        case 4 :annulerTicket();
            break;
        case 5 :rechercheTicket();
            break;
        case 6 :filtrerTrajets();
            break;
        case 7 :trierTrajets();
            break;
        case 0 :console.log(`
            Au revoir : `);
            statistiques();
            break;
        default:
            console.log("choix incorrect !");
    }
    
}
while(choix !== 0)


function AfficherTrajets(){

    for(let trajet in trips){
        console.log(`=== TRAJETS DISPONIBLES ===
            #${trips[trajet].id} ${trips[trajet].departure} → ${trips[trajet].destination}
            Départ : ${trips[trajet].departureTime}
            Arrivée : ${trips[trajet].arrivalTime}
            Prix : ${trips[trajet].price} DH
            Places disponibles : ${trips[trajet].availableSeats}
            `);        
    }
}


function acheterTicket(){
    let nomClient = prompt("Entrer Votre Nom svp ");
    let identifiantTrajet = Number(prompt("Entrer L'identifiant du Trajet svp "));
    for(let trajet of trips){
        if(identifiantTrajet === trajet.id ){      
                if(trajet.availableSeats > 0){
                    let numPlace = 1;
                    for(let ticket of tickets){
                        if(ticket.tripId === trajet.id){
                            numPlace++;
                        }
                    }
                    if(ticketAnulle.length === 0){
                        const ticket = {
                        // id:tickets.length +1,
                        id:idTicket,
                        passengerName:nomClient,
                        tripId: trajet.id,
                        seatNumber : numPlace,
                        price : trajet.price
                    }
                    idTicket++;
                    numPlace++;
                    tickets.push(ticket);
                    trajet.availableSeats --;
                    console.log(trajet.availableSeats);                
                    console.log("tickets Ajouter avec Succes");                
                    }else{
                        for(let tAnulle of ticketAnulle){
                            const ticket = {
                                id:idTicket,
                                passengerName:nomClient,
                                tripId: tAnulle.tripId,
                                seatNumber : tAnulle.seatNumber,
                                price : tAnulle.price
                                }                                
                                tickets.push(ticket);
                                trajet.availableSeats --;
                                idTicket++;
                                ticketAnulle.splice(tAnulle-1,1);
                        }
                    }
                }else{
                    console.log("Train complet");                    
                }
            return;
        }
    }
    console.log("Trajet introuvable");
}


function AfficherTickets(ticketsP){

    if(ticketsP.length >0){
            for(let ticket of ticketsP){
                for(let trajet of trips){
                    if(ticket.tripId === trajet.id){
                        console.log(`
                            Ticket #${ticket.id}
                            Passager : ${ticket.passengerName}
                            Trajet : ${trajet.departure} → ${trajet.destination}
                            Place : ${ticket.seatNumber}
                            Prix : ${ticket.price} DH
                            `);   
                        break;   
                    }
                }
                }
        }
    else{
        console.log("Aucun ticket enregistré");
        
    }
}


function rechercheTicket(){
    let nomPassager = prompt("entrer votre nom ")
    const ticketNams=[];
    for(let ticket of tickets){
        if(ticket.passengerName === nomPassager){
            ticketNams.push(ticket);           
        }
    }
    if(ticketNams.length ===0){
        console.log("nom non trouvable");            
    }
    else{
        AfficherTickets(ticketNams);
    }

}


function annulerTicket(){
    let idAnulle = Number(prompt("Entre l'id de ticket pour Annule "));
    for(let ticket of tickets){
        if(idAnulle === ticket.id){
            ticketAnulle.push(ticket);
            tickets.splice(ticket.id -1,1);
            for(let trajet of trips){
                if(idAnulle === trajet.id)
                trajet.availableSeats++;
            }
            console.log(ticketAnulle);
            

        }
    }
}

function filtrerTrajets(){
    let villedepart = prompt("entre la ville de depart svp ").toLowerCase();
    // let villeDariver = prompt("entre la ville d'ariver' svp ").toLocaleLowerCase();

    for(let trajet of trips){
        let depart = trajet.departure.toLowerCase();
        // let depart = trajet.departure.toLocaleLowerCase();
        if(depart === villedepart){
            console.log(`${trajet.departure} → ${trajet.destination} ${trajet.price} DH`);       
        }
    }
    return;
    console.log("ville non trouvable");
        
}

function trierTrajets(){
    let x ={};
    for(let i = 0 ; i<trips.length; i++){
        for(let j = 0; j<trips.length-i-1;j++){
            if(trips[j].price > trips[j+1].price){
                x = trips[j];
                trips[j] = trips[j+1];
                trips[j+1]= x;
            }
        }
    } 
    for(let trajet of trips){
        console.log(`${trajet.departure} → ${trajet.destination} ${trajet.price} DH`);
    }  
}



function statistiques(){
    console.log(`le nombre total de ticket c'est : ${tickets.length}`);
    let somme=0;
    for(let i= 0; i < tickets.length ; i++){
        somme+=tickets[i].price;
    }
    console.log(`la somme est : ${somme}`);
    
}