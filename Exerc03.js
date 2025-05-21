const prompt = require('prompt-sync')()

const distancia = parseFloat(prompt("Qual a distância da tua viagem (em km)? "))

let preco;

if (distancia <= 200) {
  preco = distancia * 0.50
} else {
  preco = distancia * 0.45
}

console.log(`O preço da passagem será R$ ${preco.toFixed(2)}.`)