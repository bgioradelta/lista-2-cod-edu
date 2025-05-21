const prompt = require('prompt-sync')()

let A = []
let B = []

// Função para ler o vetor A com 100 elementos
function lerVetor() {
  for (let i = 0; i < 100; i++) {
    let numero = Number(prompt(`Digite o valor da posição ${i + 1} do vetor A: `))
    A.push(numero)
  }
  compactarVetor()
}

// Função para compactar o vetor A, removendo valores nulos e negativos e ZEROs
function compactarVetor() {
  // Percorre o vetor A e coloca no vetor B apenas os valores válidos (não nulos e não negativos E não ZERO)
  for (let i = 0; i < A.length; i++) {
    if (A[i] !== null && A[i] >= 0 && A[i] !== 0) {
      B.push(A[i])
    }
  }

  // Exibe os vetores A e B
  console.log('\nVetor A original:')
  console.log(A)

  console.log('\nVetor B (compactado):')
  console.log(B)
}

lerVetor()