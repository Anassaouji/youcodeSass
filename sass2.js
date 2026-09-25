    let xTri = candidats[0];
    for(let i = 0 ; i< candidats.length ; i++){
        for(let j=0; j< candidats.length -i-1 ; j++){
            if(candidats[j].electeurs.length < candidats[j+1].electeurs.length){
                xTri = candidats[j];
                candidats[j] = candidats[j+1];
                candidats[j+1] = xTri;
            }
        }
    }