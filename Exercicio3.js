
//Função que lê o salário de um funcionário e informa o valor com um aumento de 15%
function salario(){
    let salario = Number(prompt('Digite o valor do seu salário: '));
    let novosalario = salario * 1.15;
    alert(`Seu novo salário é de: ${novosalario}`);
}
salario();
