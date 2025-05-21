// Definições importantes:
// Diagonal principal: elementos onde o índice da linha é igual ao índice da coluna (i == j).
// Acima da diagonal: elementos onde j > i (colunas após a linha).
// Abaixo da diagonal: elementos onde i > j (linhas após a coluna).

function somarAcimaAbaixoDiagonal(matriz) {
  let somaAcima = 0;
  let somaAbaixo = 0;

  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      if (j > i) {
        somaAcima += matriz[i][j];
      } else if (i > j) {
        somaAbaixo += matriz[i][j];
      }
    }
  }

  return {
    somaAcima,
    somaAbaixo
  };
}

// Criando matriz 10x10 com valores de 1 a 100
const matriz = [];
let valor = 1;
for (let i = 0; i < 10; i++) {
  const linha = [];
  for (let j = 0; j < 10; j++) {
    linha.push(valor++);
  }
  matriz.push(linha);
}

const resultado = somarAcimaAbaixoDiagonal(matriz);
console.table(matriz)
console.log("Soma dos elementos acima da diagonal:", resultado.somaAcima);
console.log("Soma dos elementos abaixo da diagonal:", resultado.somaAbaixo);
