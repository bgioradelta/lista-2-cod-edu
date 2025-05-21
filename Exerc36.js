// Gabarito com 13 respostas (exemplo fixo entre 1 e 2 para ter + chances de acertos qnd gerado aleatoriamente)
const gabarito = [1, 2, 1, 1, 2, 2, 1, 1, 2, 2, 1, 2, 1];

// Simulando 100 apostadores:
const apostadores = []

// Gerando dados de apostadores aleatoriamente
for (let i = 1; i <= 100; i++) {
    let respostas = [];
    for (let j = 0; j < 13; j++) {
        respostas.push(Math.floor(Math.random() * 2) + 1); // valores entre 1 e 2
    }
    apostadores.push({
        numeroCartao: i,
        respostas: respostas
    });
}

// Verificando acertos e imprimindo resultado
apostadores.forEach(apostador => {
    let acertos = 0;
    for (let i = 0; i < 13; i++) {
        if (apostador.respostas[i] === gabarito[i]) {
            acertos++;
        }
    }

    console.log(`Apostador ${apostador.numeroCartao} teve ${acertos} acertos.`);
    if (acertos === 13) {
        console.log("Parabéns, tu foi o GANHADOR!");
    }
});
