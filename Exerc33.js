// matriz 3x3
let matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

// imprime matriz original
console.log("Matriz antes multiplicação:")
console.table(matriz)

// elementos da diagonal secundária: [3, 5, 7]
let diagSec = [matriz[0][2], matriz[1][1], matriz[2][0]];
let mediaSec = (diagSec[0] + diagSec[1] + diagSec[2]) / 3;

console.log(`Média: ${mediaSec}`)

// multiplicar elementos da diagonal principal pela média da secundária
for (let i = 0; i < 3; i++) {
    matriz[i][i] *= mediaSec;
}


// mostrar matriz modificada
console.log("Matriz após multiplicação:");
for (let i = 0; i < 3; i++) {
    console.log(matriz[i].join("\t"));
}
