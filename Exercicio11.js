function alg(){
    let count= 0;
    let arr = [10,15,17,22,9,4];
    for(let i = 0; i  < arr.length;i++){
        if(arr[i]%2 == 0){
            count++
        } 
    }
    alert(`${count}`);
}
alg();
