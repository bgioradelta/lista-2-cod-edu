const A = [
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15]
  ]
  
  const B = [
    [2, 3, 4, 5, 6],
    [1, 1, 1, 1, 1],
    [0, 2, 4, 6, 8]
  ]
  
  const P = []
  
  for (let i = 0; i < 3; i++) {
    P[i] = []
    for (let j = 0; j < 5; j++) {
      P[i][j] = A[i][j] * B[i][j]
    }
  }
  
  console.log("Matriz Produto P:")
  console.table(P)
  