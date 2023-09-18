function mostrarPropiedadesNumber() {
    for (let propiedad in Number) {
      console.log(propiedad);
    }
  }
  mostrarPropiedadesNumber();
  const numero = 42;
  console.log("Número: " + numero);
  console.log("Número en formato binario: " + numero.toString(2));
  console.log("Número en formato hexadecimal: " + numero.toString(16));
  console.log("Es un número finito: " + Number.isFinite(numero));  