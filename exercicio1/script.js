// Exercicio 1
const nome = prompt("Qual seu nome?")
// a variavel "idade" precisa ser covertida para o tipo Number 
//segue a baixo duas formas de fazer casting
//let idade = Number(prompt("Qual sua idade?"))
let idade = +prompt("Qual sua idade?")

console.log (typeof nome)
console.log (typeof idade)

//Sempre separar com virgula (,) e aspas (""), para imprimir texto.
console.log("Olá", nome, 'você tem', idade, 'anos')


