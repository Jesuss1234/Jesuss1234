const arrayStrings = ["Manzana", "Banana", "Cereza", "Damasco", "Elderberry"];
const arrayObjetos = [
  { nombre: "Objeto 1", tipo: "Número" },
  { nombre: "Objeto 2", tipo: "Cadena" },
  { nombre: "Objeto 3", tipo: "Booleano" }
];
const arrayNumericoConstructor = new Array(1, 2, 3, 4, 5);
const arrayStringsConstructor = new Array("Manzana", "Banana", "Cereza", "Damasco", "Elderberry");
const arrayObjetosConstructor = new Array(
  { nombre: "Objeto 1", tipo: "Número" },
  { nombre: "Objeto 2", tipo: "Cadena" },
  { nombre: "Objeto 3", tipo: "Booleano" }
);
const objetoBase = {
  nombre: "Objeto Base",
  tipo: "Object.create()"
};
const arrayNumericoCreate = Object.create(objetoBase);
arrayNumericoCreate[0] = 1;
arrayNumericoCreate[1] = 2;
arrayNumericoCreate[2] = 3;
arrayNumericoCreate[3] = 4;
arrayNumericoCreate[4] = 5;
const arrayStringsCreate = Object.create(objetoBase);
arrayStringsCreate[0] = "Manzana";
arrayStringsCreate[1] = "Banana";
arrayStringsCreate[2] = "Cereza";
arrayStringsCreate[3] = "Damasco";
arrayStringsCreate[4] = "Elderberry";

const arrayObjetosCreate = Object.create(objetoBase);
arrayObjetosCreate[0] = { nombre: "Objeto 1", tipo: "Número" };
arrayObjetosCreate[1] = { nombre: "Objeto 2", tipo: "Cadena" };
arrayObjetosCreate[2] = { nombre: "Objeto 3", tipo: "Booleano" };
function ingresarDatos(array, datos) {
  for (let i = 0; i < datos.length; i++) {
    array[i] = datos[i];
  }
}

const datosNumericos = [6, 7, 8, 9, 10];
const datosStrings = ["Fresa", "Uva", "Higo", "Kiwi", "Limón"];
const datosObjetos = [
  { nombre: "Objeto 4", tipo: "Número" },
  { nombre: "Objeto 5", tipo: "Cadena" },
  { nombre: "Objeto 6", tipo: "Booleano" }
];
ingresarDatos(arrayNumerico, datosNumericos);
ingresarDatos(arrayStrings, datosStrings);
ingresarDatos(arrayObjetos, datosObjetos);

ingresarDatos(arrayNumericoConstructor, datosNumericos);
ingresarDatos(arrayStringsConstructor, datosStrings);
ingresarDatos(arrayObjetosConstructor, datosObjetos);

ingresarDatos(arrayNumericoCreate, datosNumericos);
ingresarDatos(arrayStringsCreate, datosStrings);
ingresarDatos(arrayObjetosCreate, datosObjetos);

console.log("Arrays numéricos:");
console.log(arrayNumerico);
console.log(arrayNumericoConstructor);
console.log(arrayNumericoCreate);

console.log("Arrays de cadenas:");
console.log(arrayStrings);
console.log(arrayStringsConstructor);
console.log(arrayStringsCreate);

console.log("Arrays de objetos:");
console.log(arrayObjetos);
console.log(arrayObjetosConstructor);
console.log(arrayObjetosCreate);