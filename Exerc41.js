const prompt = require('prompt-sync')()

// 1. Lê os dados da pessoa com prompt
let nome = prompt("Digite o nome da pessoa:")
let idade = Number(prompt("Digite a idade da pessoa:"))

// 2. Cria o objeto com os dados informados
let pessoa = {
    nome: nome,
    idade: idade
};

// 3. Mostra dados informados
console.log("Nome da pessoa: " + pessoa.nome)
console.log("Idade da pessoa: " + pessoa.idade)

// 4. Solicita o e-mail
pessoa.email = prompt("Digite o email da pessoa:")

// 5. Mostra o objeto final
console.log(
    "Pessoa cadastrada:\n" +
    "Nome: " + pessoa.nome + "\n" +
    "Idade: " + pessoa.idade + "\n" +
    "Email: " + pessoa.email
)