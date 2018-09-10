// AULA 1

// let n = 9

// for(let i = 0; i <= 10; i++) {
//     console.log(`${i} X ${n} = ${i*n}`) //  Utilizando o Template String Menos codigo
//     //console.log(i + " X " + n + " = " + (i * n))
// }

// AULA 2

// function somar(x1, x2) {
//     return x1 + x2
// } 

// function multiplicar(x1, x2) {
//     return x1 * x2
// } 

// (function(x1, x2, operator) {
//     /*
//       Eval serve para validar a operacao 
//     */
//     return eval(`${x1} ${operator} ${x2}`)
// })(1, 2, "+") 

// Funcao anomima auto invocada

// let calc = (x1, x2, operator) => {
    
//     return eval(`${x1} ${operator} ${x2}`)
// }

// function calc(x1, x2, operator) {
   
//     return eval(`${x1} ${operator} ${x2}`)
// }

// let resultado = calc(1, 2, "+")

// console.log(resultado)

/* EVENTOS */

/* Window a aplicacao e a janela 
 Document e todo o site */

// /* Trabalha com o focus do navegador */
// window.addEventListener('focus', event => {
//     console.log("focus")
// })

// /* Trabalha com o clique do mouse */
// window.addEventListener('click', event => {
//     console.log("Clicou")
// })

// let agora = new Date()

// /* 
// getDate para pegar o dia
// getFullYear para pegar o ano
// getMoth para pegar o mes
// toLocaleDateString("pt-BR")
// console.log(agora.toLocaleDateString("pt-BR"))
// */

// console.log(agora.toLocaleDateString("pt-BR"))

/* 
ARRAYS 
length para contar o total de itens
carros[0] para chamar o primeiro item do array


*/
// let carros = ["Palio 98", "Toro", "Uno", 10, true, new Date(),function(){}]
// // console.log(carros)

// carros.forEach(function(value, index) {
//     console.log(value, index)
// })

/*
ORIETADO A OBJETOS
*/

// let celular = function(){
//     this.cor = "prata"

//     this.ligar = () =>
//     {
//         console.log("Estou ligando!")
//         return "Ligando"
//     }
// }

// let objeto = new celular()

// console.log(objeto.ligar())

class celular {
    
    constructor() {
        this.cor = "prata"
    }

    ligar(){
        console.log("Estou ligando!")
        return "Ligando"
    } 

}

let objeto = new celular()

console.log(objeto.ligar())
