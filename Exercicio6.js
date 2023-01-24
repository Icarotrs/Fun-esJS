//Função que recebe idade e um booleano indicando se o usuario tem cnh
function podeDirigir(idade, cnh) {
    if (idade >= 18 && cnh == true) {
        return "Pode dirigir!";
    } 
    else {
        return "Não pode dirigir!";
    }
}

let resultado = podeDirigir(18, true);
console.log(resultado);

let resultado2 = podeDirigir(20, false);
console.log(resultado2);
