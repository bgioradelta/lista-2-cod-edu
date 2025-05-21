// objeto com as propriedades
const dados = {
  nome: "Tibúrcia",
  idade: 30,
  hobbies: ["ler", "viajar", "cozinhar"],
  notas: [8, 9, 10],
  endereco: {
    rua: "Rua das Arenas",
    numero: 1903
  },
  linguagens: ["JavaScript", "Python"]
};

// função que retorna apenas as propriedades que são arrays
function filtrarArrays(obj) {
  const resultado = {};
  for (const chave in obj) {
    if (Array.isArray(obj[chave])) {
      resultado[chave] = obj[chave]
    }
  }
  return resultado
}


// retornando um novo objeto apenas com as propriedades que são arrays
const arraysSomente = filtrarArrays(dados)
console.log(arraysSomente)