const fibonacci = []

fibonacci[0] = 0
fibonacci[1] = 1

for (let i = 2; i < 15; i++) {
  fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2]
}

console.log("Os primeiros 15 elementos da sequência de Fibonacci são:")
console.log(fibonacci)
