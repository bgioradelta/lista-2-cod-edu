const prompt = require('prompt-sync')();

const numbers = [];

for (let i = 0; i < 10; i++) {
  const number = parseInt(prompt(`Digite o ${i + 1}º número inteiro: `));
  numbers.push(number);
}

console.log('Números pares e suas posições:');

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 === 0) {
    console.log(`Número ${numbers[i]} na posição ${i}`);
  }
}
