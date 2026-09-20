

for(let i = 0; i<= 4 ; i++ ){
    let lign = "";
    for(let j= 0 ; j<=4 ; j++){
        if((i+j) % 2 === 0){
            lign +="."
        }
        else{
            lign +="#"
        }
    }
    console.log(lign);
    
}

