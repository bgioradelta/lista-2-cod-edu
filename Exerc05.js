const prompt = require('prompt-sync')()

const opcoes = ['pedra', 'papel', 'tesoura']

console.log("Bem-vindo ao jogo de JoKenPo!")
const jogadorEscolha = prompt("Escolha pedra, papel ou tesoura: ").toLowerCase()

// Gera a escolha do computador aleatoriamente
const computadorEscolha = opcoes[Math.floor(Math.random() * 3)]

console.log(`Você escolheu: ${jogadorEscolha}`)
console.log(`O computador escolheu: ${computadorEscolha}`)

// Lógica do jogo
if (jogadorEscolha === computadorEscolha) {
  console.log("Empate!")
} else if (
  (jogadorEscolha === 'pedra' && computadorEscolha === 'tesoura') ||
  (jogadorEscolha === 'papel' && computadorEscolha === 'pedra') ||
  (jogadorEscolha === 'tesoura' && computadorEscolha === 'papel')
) {
  console.log("Você ganhou!")
} else {
  console.log("Você perdeu!")
}
