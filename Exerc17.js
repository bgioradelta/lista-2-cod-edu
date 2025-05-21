const prompt = require('prompt-sync')();

const nomes = [];
const idades = [];

for (let i = 0; i < 9; i++) {
  const nome = prompt(`Digite o nome da ${i + 1}ª pessoa: `);
  const idade = parseInt(prompt(`Digite a idade de ${nome}: `));

  nomes.push(nome);
  idades.push(idade);
}

console.log('\nPessoas menores de idade:');

for (let i = 0; i < nomes.length; i++) {
  if (idades[i] < 18) {
    console.log(`Nome: ${nomes[i]}, Idade: ${idades[i]}`);
  }
}
