function mostrarPropiedadesArray() {
    for (let propiedad in Array) {
      console.log(propiedad);
    }
  }
  mostrarPropiedadesArray();
  const frutas = ["manzana", "banana", "naranja"];
  console.log("Longitud del array frutas: " + frutas.length);
  console.log("Elemento en la posición 0: " + frutas[0]);
  frutas.push("uva");
  console.log("Después de agregar 'uva': " + frutas);  