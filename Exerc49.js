function agruparTransacoesPorCategoria(transacoes) {
  const resultado = {};

  for (const transacao of transacoes) {
    const { categoria, valor } = transacao;

    // Se a categoria ainda não existe no objeto resultado, cria a estrutura
    if (!resultado[categoria]) {
      resultado[categoria] = {
        transacoes: [],
        subtotal: 0
      };
    }

    // Adiciona a transação na categoria correspondente
    resultado[categoria].transacoes.push(transacao)

    // Soma o valor ao subtotal
    resultado[categoria].subtotal += valor
  }

  return resultado
}

const transacoes = [
  { id: 1, valor: 100, data: '2025-05-01', categoria: 'Alimentação' },
  { id: 2, valor: 200, data: '2025-05-02', categoria: 'Transporte' },
  { id: 3, valor: 50,  data: '2025-05-03', categoria: 'Alimentação' },
  { id: 4, valor: 300, data: '2025-05-04', categoria: 'Lazer' },
  { id: 5, valor: 120, data: '2025-05-05', categoria: 'Transporte' }
];

const resultado = agruparTransacoesPorCategoria(transacoes);
console.dir(resultado, { depth: null })



