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
//parimpar();

//Função que lê o salário de um funcionário e informa o valor com um aumento de 15%
function salario(){
    let salario = Number(prompt('Digite o valor do seu salário: '));
    let novosalario = salario * 1.15;
    alert(`Seu novo salário é de: ${novosalario}`);
}
//salario();

