function combinarInventarios(lojaA, lojaB) {
  const resultado = { ...lojaA };

  for (const item in lojaB) {
    if (resultado[item]) {
      resultado[item] += lojaB[item];
    } else {
      resultado[item] = lojaB[item];
    }
  }

  return resultado;
}

const inventarioLojaA = {
  arroz: 105,
  feijao: 74,
  macarrao: 22,
  mesas: 14
};

const inventarioLojaB = {
  feijao: 30,
  macarrao: 41,
  leite: 17,
  chapasDeMetal: 12
};

const inventarioTotal = combinarInventarios(inventarioLojaA, inventarioLojaB);
console.log(inventarioTotal);
