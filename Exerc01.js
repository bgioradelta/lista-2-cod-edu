const prompt = require('prompt-sync')()

const cigarrosPorDia = parseInt(prompt("Quantos cigarros você fuma por dia?"))
const anosFumando = parseInt(prompt("Há quantos anos você fuma?"));

// Calcula a quantidade total de cigarros fumados
const totalCigarros = cigarrosPorDia * 365 * anosFumando

// Cada cigarro tira 10 minutos de vida, então calcula o total de minutos perdidos
const minutosPerdidos = totalCigarros * 10

// Converte minutos em dias (1 dia = 24h * 60min = 1440 minutos)
const diasPerdidos = minutosPerdidos / 1440;

console.log(`Você perdeu aproximadamente ${diasPerdidos.toFixed(2)} dias de vida devido ao fumo.`)

