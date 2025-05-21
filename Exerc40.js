// Resultado oficial da Loto (fazer range menor se quiser encontrar ganhador aleatoriamente, ex.: 0 à 10)
const resultadoOficial = [5, 12, 23, 34, 45].sort((a, b) => a - b);

// Gerando 50 apostas simuladas
const apostas = [];

for (let i = 1; i <= 50; i++) {
    let aposta = [];
    while (aposta.length < 5) {
        let num = Math.floor(Math.random() * 60) + 1; // números de 1 a 60
        if (!aposta.includes(num)) { // não inclui na aposto números já incluídos
            aposta.push(num);
        }
    }
    apostas.push(aposta);
}

// Comparar as apostas com o resultado oficial
apostas.forEach((aposta, index) => {
    const apostaOrdenada = [...aposta].sort((a, b) => a - b);
    const ehGanhador = JSON.stringify(apostaOrdenada) === JSON.stringify(resultadoOficial);
    // precisei transformar em string JSON para comparar os mesmos elementos na mesma ordem, pois
    // em JavaScript, arrays são objetos, e quando você compara objetos com == ou ===, você está 
    // comparando referências na memória, não os valores internos, logo:
    // let a = [1, 2, 3];
    // let b = [1, 2, 3];
    // console.log(a === b); seria false 


    console.log(`Aposta ${index + 1}: ${aposta.join(", ")}`);
    if (ehGanhador) {
        console.log(" Ganhador !!!");
    }
});
