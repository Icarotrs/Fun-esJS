//função que aceita somente valores se B for maior que c e d e se a soma de c e d for maior que a e b.
function testarValores() {
    a = prompt('Digite o valor de A');
    b = prompt('Digite o Valor de B');
    c = prompt('Digite o valor de C');
    d = prompt('Digite o valor de D');
    if ((b > c) && (d > a) && (c + d > a + b) && (c > 0) && (d > 0) && (a % 2 == 0)) {
        alert('Valores aceitos!');
    }
    else {
        alert('Valores não aceitos');
    }
}

testarValores();
