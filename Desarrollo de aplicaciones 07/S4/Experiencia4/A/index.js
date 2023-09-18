const objeto1 = {
    nombre: "Objeto 1",
    tipo: "inicializador de objetos",
    mostrarInfo: function() {
        console.log(`Nombre: ${this.nombre}, Tipo: ${this.tipo}`);
    }
};
function ObjetoConstructor(nombre, tipo) {
    this.nombre = nombre;
    this.tipo = tipo;
    this.mostrarInfo = function() {
        console.log(`Nombre: ${this.nombre}, Tipo: ${this.tipo}`);
    };
}
const objeto2 = new ObjetoConstructor("Objeto 2", "constructor de objetos");
const objetoBase = {
    nombre: "Objeto Base",
    tipo: "Object.create()"
};
const objeto3 = Object.create(objetoBase);
objeto3.nombre = "Objeto 3";
objeto3.tipo = "Object.create() personalizado";

objeto1.mostrarInfo();
objeto2.mostrarInfo();
console.log(`Nombre: ${objeto3.nombre}, Tipo: ${objeto3.tipo}`);