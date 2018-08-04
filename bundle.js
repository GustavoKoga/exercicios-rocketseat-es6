"use strict";

// // Uma constante não pode ter seu valor alterado
// const a = 1;
// var b = 2;
// // Mutar uma varivavel
// const usuario = {
//     nome: 'Gustavo'
// };
// usuario.nome = 'Teste';
function teste(a) {
  /*
  Onde o let é uma variável de escopo e só pode ser acessada
  dentro deste escopo
  Escopo é um pedaço de código cercado pelas chaves ({})
  ou uma classe, arquivo, função etc
  */
  var y = 2;

  if (a > 5) {
    var _y = 5;
    console.log('Dentro do escopo do if');
    console.log(a, _y);
  }

  console.log('Dentro do escopo da função');
  console.log(a, y);
}

var a = 10;
teste(a);
console.log('Escopo do arquivo');
console.log();
