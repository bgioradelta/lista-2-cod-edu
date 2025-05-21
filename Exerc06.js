const prompt = require('prompt-sync')()

const sorteado = Math.floor(Math.random() * 5) + 1
const tentativa = parseInt(prompt("Tente adivinhar um número de 1 a 5: "))

if (tentativa === sorteado)
  console.log("Parabéns! Você acertou!")
else
  console.log(`Errou! O número era ${sorteado}`)
