"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/* 
Métodos estáticos não veem o restante da classe, por isso,
o this.todos não é alcançado
*/
// class TodoList {
//      constructor() {
//         this.todos = [];
//     }
//     static addTodo() {
//         this.todos.push('Novo ToDo');
//         console.log(this.todos);
//     }
// }
// TodoList.addTodo();

/*
Por esse motivo, a classe acima não é utilizada da maneira correta
pois os métodos static são mais para utilidades
As classes com métodos static não necessitam de instanciação 
para execução do seu método
 */
var Matematica =
/*#__PURE__*/
function () {
  function Matematica() {
    _classCallCheck(this, Matematica);
  }

  _createClass(Matematica, null, [{
    key: "soma",
    value: function soma(a, b) {
      return a + b;
    }
  }]);

  return Matematica;
}();

console.log(Matematica.soma(1, 2));
