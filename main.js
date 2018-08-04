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
class Matematica {
    static soma(a, b) {
        return a + b;
    }
}

console.log(Matematica.soma(1, 2));

