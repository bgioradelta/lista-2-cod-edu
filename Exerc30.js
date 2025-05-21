function calcularSomas(matriz) {
  const SL = new Array(5).fill(0); // Soma das linhas
  const SC = new Array(5).fill(0); // Soma das colunas

  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
      SL[i] += matriz[i][j];
      SC[j] += matriz[i][j];
    }
  }

  console.log("\nMatriz M:");
  for (let linha of matriz) {
    console.log(linha.join("\t"));
  }

  console.log("\nSoma das linhas (SL):", SL);
  console.log("Soma das colunas (SC):", SC);
}

const M = [
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15],
  [16, 17, 18, 19, 20],
  [21, 22, 23, 24, 25]
];

calcularSomas(M);
