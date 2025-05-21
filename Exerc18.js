const prompt = require('prompt-sync')();

// Criação do "registro" como um objeto
let funcionario = {
  nome: '',
  cargo: '',
  salario: 0
};

// Leitura dos dados do funcionário
funcionario.nome = prompt('Nome do funcionário: ');
funcionario.cargo = prompt('Cargo do funcionário: ');
funcionario.salario = parseFloat(prompt('Salário do funcionário: '));

// Exibição do conteúdo do registro
console.log('\nDados do Funcionário:');
console.log(`Nome: ${funcionario.nome}`);
console.log(`Cargo: ${funcionario.cargo}`);
console.log(`Salário: R$ ${funcionario.salario.toFixed(2)}`);
