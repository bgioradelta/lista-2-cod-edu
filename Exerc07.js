const prompt = require('prompt-sync')()

const tipoCarro = prompt("Ttipo de carro (popular ou luxo): ").toLowerCase()
const dias = parseInt(prompt("Quantos dias de aluguel? "))
const km = parseFloat(prompt("Quantos Km foram percorridos? "))

let precoCarro, precoKm

if (tipoCarro === 'popular') {
  precoCarro = 90 * dias
  if (km <= 100) precoKm = km * 0.20
  else precoKm = km * 0.10
} else if (tipoCarro === 'luxo') {
  precoCarro = 150 * dias
  if (km <= 200) precoKm = km * 0.30
  else precoKm = km * 0.25
} else {
  console.log("Tipo de carro inválido!")
  process.exit()
}

const total = precoCarro + precoKm
console.log(`Preço do aluguel: R$ ${precoCarro.toFixed(2)}`)
console.log(`Preço pelos Km percorridos: R$ ${precoKm.toFixed(2)}`)
console.log(`Total a pagar: R$ ${total.toFixed(2)}`)