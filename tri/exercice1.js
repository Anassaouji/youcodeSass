

const arr = [1,2,100,5,7,8,96,12,10,14,47,48,56,10,1,4,5];

let x =0;

for(let i = 0 ; i< arr.length ; i++){
    for(let j = 0 ; j<arr.length -i - 1 ; j++){
        if(arr[j] < arr[j+1]){
            x=arr[j];
            arr[j] = arr[j+1];
            arr[j+1] = x; 
        }
    }
}

console.log(arr);
