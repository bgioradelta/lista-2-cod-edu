// gera matriz 12x13 com inteiros aleatórios entre -50 e 50
let M = [];
for (let i = 0; i < 12; i++) {
    let linha = [];
    for (let j = 0; j < 13; j++) {
        linha.push(Math.floor(Math.random() * 101) - 50); // -50 a 50
    }
    M.push(linha);
}

console.table(M)

// clonar a matriz original
function clonarMatriz(matriz) {
    return matriz.map(linha => linha.slice());
}
let original = clonarMatriz(M);

// dividi cada elemento da linha pelo maior em módulo e arredonda
for (let i = 0; i < 12; i++) {
    let linha = M[i];
    let maiorModulo = Math.max(...linha.map(Math.abs));

    if (maiorModulo !== 0) {
        for (let j = 0; j < 13; j++) {
            linha[j] = (linha[j] / maiorModulo).toFixed(2); // Arredonda para inteiro
        }
    }
}

// mostra resultado
console.log("Matriz Original:");
original.forEach(linha => {
    console.log(linha.map(n => n.toString().padStart(4)).join(" "));
});

console.log("\nMatriz Modificada:");
M.forEach(linha => {
    console.log(linha.map(n => n.toString().padStart(4)).join(" "));
});

console.table(M)