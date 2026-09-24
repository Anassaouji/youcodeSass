
function acheterTicket() {

    let nomClient = prompt("Entrer Votre Nom svp ");
    let identifiantTrajet = Number(prompt("Entrer L'identifiant du Trajet svp "));

    for (let trajet of trips) {

        // 1. Rechercher le trajet
        if (identifiantTrajet === trajet.id) {

            // 2. Vérifier s'il reste une place
            if (trajet.availableSeats > 0) {

                // 3. Trouver le prochain numéro de place
                let numPlace = 1;

                for (let ticket of tickets) {
                    if (ticket.tripId === trajet.id) {
                        numPlace++;
                    }
                }

                // 4. Créer le ticket
                const ticket = {
                    id: tickets.length + 1,
                    passengerName: nomClient,
                    tripId: trajet.id,
                    seatNumber: numPlace,
                    price: trajet.price
                };

                // 5. Diminuer les places disponibles
                trajet.availableSeats--;

                // 6. Ajouter le ticket au tableau
                tickets.push(ticket);

                console.log("Ticket ajouté avec succès !");
                console.log(ticket);

            } else {
                console.log("Train complet");
            }

            // Le trajet a été trouvé, donc on arrête la recherche
            return;
        }
    }

    // Aucun trajet trouvé après avoir parcouru tout le tableau
    console.log("Trajet introuvable");
}

