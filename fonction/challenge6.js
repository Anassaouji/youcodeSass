
// 0, 1, 1, 2, 3, 5, 8, 13, 21

function fibonacci(n){
    let a =0;
    let b = 1;
    
    for(let i = 0 ; i < n ; i++){
        let f = a + b;
        a = b;
        b = f;
    }
    return a;

}

console.log(fibonacci(2));
