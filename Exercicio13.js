let mercado = ['1','2','3','4','5','6','7','8','9'];
let pares = []
mercado.forEach(function(item, indice){
    if(item % 2 == 0){
        console.log(item)
        pares.push(item)
        console.log(pares);
    }
});
