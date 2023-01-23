//função que aceita somente valores se B for maior que c e d e se a soma de c e d for maior que a e b.
function senha(valores){
    a = prompt('Digite o valor de A');
    b = prompt('Digite o Valor de B');
    c = prompt('Digite o valor de C');
    d = prompt('Digite o valor de D');
    valores = [a,b,c,d]
    if (b > c, b > d, c + d > a + b) {
        alert (`valores aceitos`)
    } else{
        alert(`Valores negados`)
    }
}
senha();
