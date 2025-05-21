const prompt = require('prompt-sync')()

let pares = []
let impares = []
let totalLeituras = 0

// Função para ler os valores
function lerValores() {
  if (totalLeituras < 30) {
    let numero = Number(prompt('Digite um número: '))

    if (numero % 2 === 0) {
      // Se o vetor de pares estiver cheio, imprime e reinicia
      if (pares.length === 5) {
        console.log('Vetor de pares completo:', pares)
        pares = []  // Reinicia o vetor de pares
      }
      pares.push(numero)
    } else {
      // Se o vetor de ímpares estiver cheio, imprime e reinicia
      if (impares.length === 5) {
        console.log('Vetor de ímpares completo:', impares)
        impares = []  // Reinicia o vetor de ímpares
      }
      impares.push(numero)
    }

    totalLeituras++

    // Continua a leitura
    lerValores()
  } else {
    // Após 30 leituras, imprime os vetores finais
    console.log('\nVetor de pares final:', pares)
    console.log('Vetor de ímpares final:', impares)
  }
}

lerValores()
