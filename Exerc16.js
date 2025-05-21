// Criar vetor e preencher com 20 números aleatórios entre 0 e 99
let vetor = []
for (let i = 0; i < 20; i++) {
  vetor.push(Math.floor(Math.random() * 100))
}

console.log("Números gerados:")
console.table(vetor)

// Ordenar em ordem crescente
vetor.sort((a, b) => a - b)

// Mostrar o vetor ordenado
console.log("Números ordenados:")
console.table(vetor)
