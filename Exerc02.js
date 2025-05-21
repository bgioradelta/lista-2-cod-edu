const prompt = require('prompt-sync')()

const velocidade = parseFloat(prompt("Qual a velocidade do carro (km/h)? "))

if (velocidade > 80) {
  const excesso = velocidade - 80
  const multa = excesso * 5.0
  console.log(`Você foi multado, pois excedeu o limite em ${excesso.toFixed(1)} km/h.`)
  console.log(`Valor da multa: R$ ${multa.toFixed(2)}`);
} else {
  console.log("Velocidade dentro do limite. Dirija com segurança!")
}
