function contarOcorrencias(array) {
  const resultado = {};

  for (let str of array) {
    if (resultado[str]) {
      resultado[str]++
    } else {
      resultado[str] = 1
    }
  }

  return resultado
}

const palavras = ["maçã", "banana", "maçã", "laranja", "banana", "maçã", "banana", "maçã", "banana", "maçã", "laranja"]
console.log(contarOcorrencias(palavras));
