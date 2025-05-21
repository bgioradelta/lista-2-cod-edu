// Fiz 5x5 para a visualização ficar mais fácil, para mudar para 50x50, basta mudar 
// a const size para = 50, ou outro valor desejado.

const size = 5
const matriz = []

// Gera matriz 5x5 com inteiros aleatórios de 1 a 9
for (let i = 0; i < size; i++) {
  matriz[i] = []
  for (let j = 0; j < size; j++) {
    matriz[i][j] = Math.floor(Math.random() * 9) + 1
  }
}

console.log("Matriz original:")
console.table(matriz)

// Multiplica cada linha pelo valor da diagonal principal
for (let i = 0; i < size; i++) {
  const fator = matriz[i][i] // elemento da diagonal principal
  for (let j = 0; j < size; j++) {
    matriz[i][j] = matriz[i][j] * fator
  }
}

console.log("Matriz modificada:")
console.table(matriz)
