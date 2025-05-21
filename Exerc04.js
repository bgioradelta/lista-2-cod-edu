const prompt = require('prompt-sync')()

const a = parseFloat(prompt("Digite o comprimento do primeiro segmento: "))
const b = parseFloat(prompt("Digite o comprimento do segundo segmento: "))
const c = parseFloat(prompt("Digite o comprimento do terceiro segmento: "))

if (a < b + c && b < a + c && c < a + b) {
  console.log("Os segmentos PODEM formar um triângulo.")
} else {
  console.log("Os segmentos NÃO podem formar um triângulo.")
}