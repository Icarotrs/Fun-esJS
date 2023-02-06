let mes = ['jan','mar','abril','mai','jun','set','out','nov'];
function adicionarmeses(){
    
    mes.splice(5,0,'ago');
    mes.splice(5,0,'jul');
    mes.splice(1,0,'fev');
    mes.push('Dez');
    alert(mes);
}
adicionarmeses();
// Em listas menores isso não faz tanta diferença mas é mais prático adicionar itens de traz pra frente, assim fica mais facil de definir as posições ja que as que vem por ultimo não alteram a posição original onde seriam incluidos os itens que vem primeiro na lista
