const tamanho = 5;
const matriz = [];

// gera matriz 5x5 com inteiros aleatórios de 1 a 100
for (let i = 0; i < tamanho; i++) {
  const linha = [];
  for (let j = 0; j < tamanho; j++) {
    linha.push(Math.floor(Math.random() * 100) + 1);
  }
  matriz.push(linha);
}

// variáveiss
let somaLinha4 = 0;
let somaColuna2 = 0;
let somaDiagonalPrincipal = 0;
let somaTotal = 0;

// percorre a matriz
for (let i = 0; i < tamanho; i++) {
  for (let j = 0; j < tamanho; j++) {
    const valor = matriz[i][j];
    if (i === 3) somaLinha4 += valor;             // linha 4
    if (j === 1) somaColuna2 += valor;             // coluna 2
    if (i === j) somaDiagonalPrincipal += valor;   // diagonal principal
    somaTotal += valor;                            // todos os elementos
  }
}

// exibir matriz
console.log("Matriz M(5x5):");
matriz.forEach(linha => {
  console.log(linha.join('\t'));
});

// somas
console.log("\nResultados das somas:");
console.log("a) Soma da linha 4:", somaLinha4);
console.log("b) Soma da coluna 2:", somaColuna2);
console.log("c) Soma da diagonal principal:", somaDiagonalPrincipal);
console.log("d) Soma de todos os elementos:", somaTotal);
