function testarValores(A, B, C, D) {
    if ((B > C) && (D > A) && (C + D > A + B) && (C > 0) && (D > 0) && (A % 2 == 0)) {
        alert('Valores aceitos!');
    }
    else {
        alert('Valores não aceitos');
    }
}

testarValores(2, 3, 2, 6);
