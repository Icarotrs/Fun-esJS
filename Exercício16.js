const p= document.createElement('p');
p.innerText= 'elemento criado!';

function formatar(){
const box = document.querySelector('.box-listas');
//--------------- Inserir o elemento antes: -----------------------
//const h2 = document.querySelector('h2');

//box.insertBefore(p, h2);
//-----------------------------------------------------------------
box.appendChild(p);
}
