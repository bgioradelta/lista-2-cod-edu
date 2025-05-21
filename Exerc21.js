const prompt = require('prompt-sync')();

function calcularPesoIdeal(alt, sexo) {
  if (sexo.toLowerCase() === 'masculino' || sexo.toLowerCase() === 'm') {
    return 72.7 * alt - 58;
  } else if (sexo.toLowerCase() === 'feminino' || sexo.toLowerCase() === 'f') {
    return 62.1 * alt - 44.7;
  } else {
    return null;
  }
}

// Entrada do usuário
const sexo = prompt('Digite seu gênero (masculino/feminino): ');
const altura = parseFloat(prompt('Digite sua altura em metros (ex: 1.75): '));

// Cálculo e saída
const pesoIdeal = calcularPesoIdeal(altura, sexo);

if (pesoIdeal !== null) {
  console.log(`Seu peso ideal é: ${pesoIdeal.toFixed(2)} kg`);
} else {
  console.log('Gênero inválido. Tente novamente.');
}
