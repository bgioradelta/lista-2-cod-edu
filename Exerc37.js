// Gerei as respostas dos alunos aleatoriamente, logo, acertar 12 de 20 questões dessa forma é um evento raro.
// Por isso, baixei a média para 6 acertos para fins de testes do código e, assim, encontrar 'APROVADOS'.

// Gabarito fixo (20 questões)
const G = ["A", "B", "C", "D", "E", "A", "B", "C", "D", "E", "A", "B", "C", "D", "E", "A", "B", "C", "D", "E"]

// Função para gerar uma resposta aleatória de 20 letras
function gerarRespostasAleatorias() {
  const alternativas = ["A", "B", "C", "D", "E"]
  const respostas = []
  for (let i = 0; i < 20; i++) {
    const aleatoria = alternativas[Math.floor(Math.random() * alternativas.length)]
    respostas.push(aleatoria)
  }
  return respostas
}

// Processar os 50 alunos
for (let aluno = 1; aluno <= 50; aluno++) {
  const R = gerarRespostasAleatorias()
  let acertos = 0;

  // Comparar respostas com gabarito
  for (let i = 0; i < 20; i++) {
    if (R[i] === G[i]) {
      acertos++
    }
  }

  const status = acertos >= 6 ? "APROVADO" : "REPROVADO";
  console.log(`Aluno ${aluno}: ${acertos} acertos - ${status}`)
}
