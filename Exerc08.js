const prompt = require('prompt-sync')()

const horas = parseInt(prompt("Quantas horas de atividade física você fez no mês? "))

let pontos

if (horas <= 10) {
  pontos = horas * 2
} else if (horas <= 20) {
  pontos = (horas * 5)
} else {
  pontos = (horas * 10)
}

const dinheiro = pontos * 0.05

console.log(`Você ganhou ${pontos} pontos e R$ ${dinheiro.toFixed(2)} de recompensa.`)
