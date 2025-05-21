const obj1 = { nome: "Jacques", idade: 25, cidade: "Rio Grande" };
const obj2 = { idade: 30, pais: "Brasil" };

function combinarObjetos(obj1, obj2) {
  return { ...obj1, ...obj2 };
}

const combinado = combinarObjetos(obj1, obj2);
console.log(combinado);

// usei operador spread (...), a ordem dos objetos importa
// nesse caso, obj2 sobrescreve o obj1, pq vem depois