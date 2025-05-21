const vendas = [
  { vendedor: "Lúcio", valor: 1700 },
  { vendedor: "Carlitos", valor: 2200 },
  { vendedor: "Bieller", valor: 1150 },
  { vendedor: "Aymar", valor: 1550 },
  { vendedor: "Carlitos", valor: 500 },
  { vendedor: "Lúcio", valor: 350 },
  { vendedor: "Bieller", valor: 3100 },
  { vendedor: "Aymar", valor: 1555 }
]

function somarVendasPorVendedor(vendas) {
  const totalPorVendedor = {}

  for (const venda of vendas) {
    const { vendedor, valor } = venda;
    if (totalPorVendedor[vendedor]) {
      totalPorVendedor[vendedor] += valor
    } else {
      totalPorVendedor[vendedor] = valor
    }
  }

  return totalPorVendedor
}

const resultado = somarVendasPorVendedor(vendas)
console.log(resultado)


