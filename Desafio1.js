
//Leandro possui um veiculo que faz 12km/l e recentemente realizou uma viagem e gostaria de saber quantos litros de gasolina ele gastou nesta viagem onde ele a realizou em uma velocidade constante. Leia a velocidade e o tempo (inteiros) e informe quantos litros de gasolina foram gastos e exiba para o usuário Escreva uma função para solucionar este problema:
//Prompts: velocidade(em Km/h) e tempo(em horas)
//Operações: multiplicar velocidade e  tempo para obter a distância e dividir a distância pelo consumo ja definido como 12km/l

function consumo(){
    let velocidade = Number(prompt('Informe a velocidade(em Km/H):'));
    let tempo = Number(prompt('informe o tempo gasto(em horas):'))
    const distancia = velocidade * tempo;
    const consumo = distancia /  12;
    alert(`Seu consumo foi de: ${consumo}`);

}
consumo();
