// gerar 80 empregados fictícios

const empregados = [];

for (let i = 0; i < 80; i++) {
  const matricula = 1001 + i
  const nome = `Funcionário ${i + 1}`
  const salarioBruto = Math.floor(Math.random() * (8000 - 2000 + 1)) + 2000; // entre 2000 e 8000

  empregados.push({
    matricula,
    nome,
    salarioBruto
  });
}

console.log(empregados);

// função para calcular contracheque
function calcularContracheque(empregado) {
  const deducaoINSS = empregado.salarioBruto * 0.12;
  const salarioLiquido = empregado.salarioBruto - deducaoINSS;

  return {
    ...empregado,
    deducaoINSS,
    salarioLiquido
  };
}

// exibir contracheques
empregados.map(calcularContracheque).forEach(empregado => {
  console.log("Matrícula:", empregado.matricula)
  console.log("Nome:", empregado.nome)
  console.log("Salário bruto: R$", empregado.salarioBruto.toFixed(2))
  console.log("Dedução INSS (12%): R$", empregado.deducaoINSS.toFixed(2))
  console.log("Salário líquido: R$", empregado.salarioLiquido.toFixed(2))
  console.log("-".repeat(40))
})