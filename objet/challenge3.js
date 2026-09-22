

function calculeLaire(longeur,largeur){
    const rectangle = {
        longeur : longeur,
        largeur : largeur
    };
    return rectangle.largeur * rectangle.largeur;
}

console.log(calculeLaire(15,20));
