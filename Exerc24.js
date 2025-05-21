function contarNegativosPorLinha(matriz) {
  const vetorC = [];

  for (let i = 0; i < matriz.length; i++) {
    let contador = 0;

    for (let j = 0; j < matriz[i].length; j++) {
      if (matriz[i][j] < 0) {
        contador++;
      }
    }

    vetorC.push(contador);
  }

  return vetorC;
}

const M = [
  [1, -2, 3, -4, 5, 6, -7, 8],
  [0, 1, 2, 3, 4, 5, 6, 7],
  [-1, -2, -3, -4, -5, -6, -7, -8],
  [1, 2, -1, -2, 3, 4, 5, 6],
  [-9, -8, 7, 6, 5, -4, -3, 2],
  [1, -1, 1, -1, 1, -1, 1, -1]
];

const C = contarNegativosPorLinha(M);
console.log("Vetor C (qtd de números negativos por linha):", C);
