function multiplicarMatrizPorValor(matriz, A) {
  const vetorV = [];

  for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz[i].length; j++) {
      vetorV.push(matriz[i][j] * A);
    }
  }

  return vetorV;
}

const M = [
  [1, 2, 3, 4, 5, 6],
  [7, 8, 9, 10, 11, 12],
  [13, 14, 15, 16, 17, 18],
  [19, 20, 21, 22, 23, 24],
  [25, 26, 27, 28, 29, 30],
  [31, 32, 33, 34, 35, 36]
];

const A = 2;

const V = multiplicarMatrizPorValor(M, A);
console.log("Vetor V (Matriz multiplicada por A):");
console.log(V);
