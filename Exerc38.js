// Vetor com 6 números (poderia ser entrada do usuário tb)
let vetor = [5, 2, 8, 1, 4, 3]

// Identificador da operação (exemplo: 1 = soma, 2 = produto, etc)
let operacao = 1; // altere este número entre 1 a 5 para testar as diferentes funções

switch (operacao) {
    case 1: // Soma dos elementos
        const soma = vetor.reduce((acc, val) => acc + val, 0);
        console.log("Soma dos elementos:", soma);
        break
    
    case 2: // Produto dos elementos
        const produto = vetor.reduce((acc, val) => acc * val, 1);
        console.log("Produto dos elementos:", produto)
        break
    
    case 3: // Média dos elementos
        const media = vetor.reduce((acc, val) => acc + val, 0) / vetor.length
        console.log("Média dos elementos:", media)
        break
    
    case 4: // Ordenação crescente
        const ordenado = [...vetor].sort((a, b) => a - b)
        console.log("Vetor ordenado:", ordenado);
        break
    
    case 5: // Mostrar vetor
        console.log("Vetor original:", vetor)
        break
    
    default:
        console.log("Operação inválida. Escolha um número de 1 a 5.")
}
