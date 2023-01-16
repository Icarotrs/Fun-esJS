
//Função que lê um numero e informa se ele é par ou impar

function parimpar(){
    let valor = Number(prompt('digite um valor:'));
    if(valor % 2 == 0) {
        alert("O numero é par");
    }else{
        alert("O numero é impar");
    }
}
parimpar();
