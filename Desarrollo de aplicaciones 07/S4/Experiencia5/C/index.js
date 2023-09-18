const numeros = [1, 2, 3, 4, 5];
console.log("Iteración con forEach:");
numeros.forEach(function(numero) {
  console.log(numero);
});
const numerosFiltrados = numeros.filter(function(numero) {
  return numero > 2;
});
console.log("Elementos mayores que 2:", numerosFiltrados);
const numerosMapeados = numeros.map(function(numero) {
  return numero * 2;
});
console.log("Elementos multiplicados por 2:", numerosMapeados);
const suma = numeros.reduce(function(total, numero) {
  return total + numero;
}, 0);
console.log("Suma de elementos:", suma);
const encontrado = numeros.find(function(numero) {
  return numero >= 3;
});
console.log("Primer elemento mayor o igual a 3:", encontrado);