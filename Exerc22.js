function analisarPopulacao(dados) {
  let totalSalario = 0
  let totalFilhos = 0
  let maiorSalario = 0
  let countAte350 = 0
  let totalPessoas = dados.length

  if (totalPessoas === 0) {
    console.log("Nenhum dado inserido.")
    return
  }

  for (let pessoa of dados) {
    const salario = pessoa.salario
    const filhos = pessoa.filhos

    totalSalario += salario
    totalFilhos += filhos

    if (salario > maiorSalario) {
      maiorSalario = salario
    }

    if (salario <= 350) {
      countAte350++
    }
  }

  const mediaSalario = totalSalario / totalPessoas;
  const mediaFilhos = totalFilhos / totalPessoas;
  const percentualAte350 = (countAte350 / totalPessoas) * 100

  return {
    mediaSalario: mediaSalario.toFixed(2),
    mediaFilhos: mediaFilhos.toFixed(2),
    maiorSalario: maiorSalario.toFixed(2),
    percentualAte350: percentualAte350.toFixed(2) + "%"
  };
}

// Testando com array de dados:
const habitantes = [
  { salario: 200, filhos: 2 },
  { salario: 1200, filhos: 1 },
  { salario: 800, filhos: 3 },
  { salario: 300, filhos: 0 },
  { salario: 350, filhos: 2 }
];

const resultado = analisarPopulacao(habitantes)
console.log(resultado)
