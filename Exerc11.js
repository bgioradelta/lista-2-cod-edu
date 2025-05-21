const prompt = require('prompt-sync')()

const primeiroTermo = parseInt(prompt("Digite o primeiro termo da PA: "))
const razao = parseInt(prompt("Digite a razão da PA: "))

let soma = 0
let termo = primeiroTermo

console.log("Os 10 primeiros termos da PA são:")

for (let i = 1; i <= 10; i++) {
  console.log(termo)
  soma += termo
  termo += razao
}

console.log(`A soma dos 10 primeiros termos é: ${soma}`)