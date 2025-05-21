// definindo A
const A = 5;

// criando matriz V 30x30 com valores aleatórios de 0 a 9
let V = [];
for (let i = 0; i < 30; i++) {
    let linha = [];
    for (let j = 0; j < 30; j++) {
        linha.push(Math.floor(Math.random() * 10)); // 0 a 9
    }
    V.push(linha);
}

// quantos valores iguais a A
let countA = 0;
for (let i = 0; i < 30; i++) {
    for (let j = 0; j < 30; j++) {
        if (V[i][j] === A) countA++;
    }
}

// cria matriz X com todos elementos diferentes de A, preservando a ordem
// como o tamanho de X é variável, representaremos como array unidimensional
let X = [];
for (let i = 0; i < 30; i++) {
    for (let j = 0; j < 30; j++) {
        if (V[i][j] !== A) {
            X.push(V[i][j]);
        }
    }
}

// mostra resultados
console.log(`Número de elementos iguais a ${A}: ${countA}`);

console.log("Matriz X (elementos diferentes de A):");
console.log(X);
