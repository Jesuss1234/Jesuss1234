const objetoA = {
    nombre: "Objeto A",
    tipo: "inicializador de objetos"
};
objetoA.color = "Rojo";
objetoA.peso = "5 kg";
function ObjetoB(nombre, tipo) {
    this.nombre = nombre;
    this.tipo = tipo;
}
const objetoB = new ObjetoB("Objeto B", "constructor de objetos");
objetoB.color = "Azul";
objetoB.peso = "3 kg";
const objetoBase = {
    nombre: "Objeto Base",
    tipo: "Object.create()"
};
const objetoC = Object.create(objetoBase);
objetoC.nombre = "Objeto C";
objetoC.tipo = "Object.create() personalizado";
objetoC.color = "Verde";
objetoC.peso = "2 kg";

console.log(`Nombre: ${objetoA.nombre}, Tipo: ${objetoA.tipo}, Color: ${objetoA.color}, Peso: ${objetoA.peso}`);
console.log(`Nombre: ${objetoB.nombre}, Tipo: ${objetoB.tipo}, Color: ${objetoB.color}, Peso: ${objetoB.peso}`);
console.log(`Nombre: ${objetoC.nombre}, Tipo: ${objetoC.tipo}, Color: ${objetoC.color}, Peso: ${objetoC.peso}`);