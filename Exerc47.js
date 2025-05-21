function transformarObjeto(obj, funcao) {
  const resultado = {}

  for (let chave in obj) {
    if (obj.hasOwnProperty(chave)) {
      resultado[chave] = funcao(obj[chave], chave)
    }
  }

  return resultado
}

const entrada = {
  a: 1,
  b: 2,
  c: 3
};

const dobrado = transformarObjeto(entrada, valor => valor * 2)

console.log(dobrado)
