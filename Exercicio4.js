function aumentarSalario(salario) { // salario = sal
    let novoSalario = salario * 1.15;
    alert(`SALARIO NOVO = ${novoSalario}`);
}

let sal = Number(prompt('Digite o seu salário: '));
aumentarSalario(sal);

// -------------------------------------------------
function areaTriangulo(base, altura) {
    let area = base * altura / 2;
    alert(`AREA = ${area}`);
}
areaTriangulo(10, 5);
