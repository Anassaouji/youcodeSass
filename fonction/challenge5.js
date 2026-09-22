


function factorielle(nbr){
    let f = 1;
    for(let i = 1 ; i <= nbr ; i++){
        f*=i;
    }
    return f;
}

console.log(factorielle(5));
