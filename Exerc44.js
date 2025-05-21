function contarStrings(obj) {
  let contador = 0;
  
  for (let chave in obj) {
    if (typeof obj[chave] === 'string') {
      contador++;
    }
  }
  
  return contador
}

const exemplo = {
  nome: "Maria",
  idade: 30,
  cidade: "São Paulo",
  ativo: true,
  profissao: "Engenheira"
};

console.log(contarStrings(exemplo))
