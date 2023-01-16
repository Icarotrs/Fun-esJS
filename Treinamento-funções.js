// Função que soma dois numeros e exibeo resultado fora do console
function somardoisnumeros(){
let a = Number(prompt('digite o primeiro valor'));
let b = Number(prompt('digite o segundo valor'));
const resultado = a + b;
alert (`Resultado = ${resultado}`);
}
//somardoisnumeros();

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
