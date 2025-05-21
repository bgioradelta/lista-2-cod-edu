// matriz 15x20 de inteiros random entre 0 e 100
const linhas = 15;
const colunas = 20;
const matriz = [];

for (let i = 0; i < linhas; i++) {
  const linha = [];
  for (let j = 0; j < colunas; j++) {
    linha.push(Math.floor(Math.random() * 101)); // número inteiro entre 0 e 100
  }
  matriz.push(linha);
}

// soma de cada coluna
const somasColunas = Array(colunas).fill(0);

for (let j = 0; j < colunas; j++) {
  for (let i = 0; i < linhas; i++) {
    somasColunas[j] += matriz[i][j];
  }
}

// somas de cada coluna
console.log("Soma de cada coluna:");
somasColunas.forEach((soma, index) => {
  console.log(`Coluna ${index + 1}: ${soma}`);
});
