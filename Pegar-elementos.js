console.log(document.body.childNodes);
console.log(document.body.childNodes[3]);
console.log(document.body.childNodes[3].childNodes);
console.log(document.body.childNodes[3].childNodes[1]);
console.log(document.body.childNodes[3].childNodes[1].childNodes[1]);
//console.log(document.body.childNodes[3].childNodes[1].childNodes[1].textContent);

// Como pegar elementos 
/**
 * Pela tag
 * -> document.getElementsByTagName('nome-da-tag')
 * Pela class
 * -> document.getElementsByClassName('nome-da-class')
 * Pelo id
 * -> document.getElementById('nome-do-id')
 * Pelo seletor CSS
 * -> document.querySelector('seletor-css')
 * pela tag => nome-da-tag
 * pela class => .nome-da-class
 * pelo id => #nome-do-id
 * 
 * -- Pega o primeiro elemento elemento que ele encontrar com o seletor
 */

let h1 = document.getElementsByTagName('h1');
console.log(h1);

let header = document.getElementsByClassName('header');
console.log(header);

let titulo = document.getElementById('titulo');
console.log(titulo);
console.log("Texto do <p> " + titulo.textContent);


// Pegando os elementos com querySelector
let h1q = document.querySelector('h1');
console.log(h1q);

let headerQ = document.querySelector('.header');
console.log(headerQ);

let tituloQ = document.querySelector('#titulo');
console.log(tituloQ);

