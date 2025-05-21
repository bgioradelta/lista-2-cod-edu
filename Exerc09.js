const prompt = require('prompt-sync')()

let totalSalarioHomens = 0
let totalSalarioMulheres = 0

do {
  const salario = parseFloat(prompt("Digite o salário do funcionário: R$ "))
  const sexo = prompt("Digite o sexo do funcionário (M para Masculino, F para Feminino): ").toUpperCase()

  if (sexo === 'M') {
    totalSalarioHomens += salario
  } else if (sexo === 'F') {
    totalSalarioMulheres += salario
  } else {
    console.log("Sexo inválido! Use 'M' para Masculino e 'F' para Feminino.")
  }

  var continuar = prompt("Deseja continuar? (s/n): ").toLowerCase()
  
} while (continuar === 's')

console.log(`\nTotal de salário pago aos homens: R$ ${totalSalarioHomens.toFixed(2)}`)
console.log(`Total de salário pago às mulheres: R$ ${totalSalarioMulheres.toFixed(2)}`)
