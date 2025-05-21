// 10. Crie um programa usando a estrutura “faça enquanto” que leia vários números. A
// cada laço, pergunte se o usuário quer continuar ou não. No final, mostre na tela:
// a) O somatório entre todos os valores;
// b) Qual foi o menor valor digitado;
// c) A média entre todos os valores;
// d) Quantos valores são pares.

const prompt = require('prompt-sync')()

let soma = 0
let menor = null
let quantidade = 0
let pares = 0

do {
  let entrada = prompt('Digite um número:')
  let numero = Number(entrada)

  if (!isNaN(numero)) {
    soma += numero
    quantidade++

    if (menor === null || numero < menor) {
      menor = numero
    }

    if (numero % 2 === 0) {
      pares++
    }
  } else {
    alert('Digite um número válido.')
  }

  continuar = prompt('Deseja continuar? (s/n)').toLowerCase()

} while (continuar === 's')

let media = quantidade > 0 ? soma / quantidade : 0

console.log(`Resultados:
a) Somatório: ${soma}
b) Menor valor: ${menor}
c) Média: ${media.toFixed(2)}
d) Valores pares: ${pares}`)
