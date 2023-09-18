const numeros = [1, 2, 3, 4, 5];
numeros.push(6);
numeros.pop();
numeros.unshift(0);
numeros.shift();
const posicion = numeros.indexOf(3);
if (posicion !== -1) {
  numeros.splice(posicion, 1);
}
console.log("Array de números después de manipulación:", numeros);

const frutas = ["Manzana", "Banana", "Cereza", "Damasco", "Elderberry"];
const sublista = frutas.slice(1, 4);
console.log("Sublista de frutas:", sublista);