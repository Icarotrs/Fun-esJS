//calcular a media de 3 notas utilizando array com a segunda media da lista sendo dividida por 2
function gerarMedias(nota1, nota2, nota3) {
    let notas = [nota1, nota2, nota3];
    notas[1] = notas[1] / 2;
    let media = (notas[0] + notas[1] + notas[2]) / notas.length;

    console.log(notas);
    console.log(`MÉDIA = ${media.toFixed(1)}`);
}

gerarMedias(7.5, 8.2, 4.7);
