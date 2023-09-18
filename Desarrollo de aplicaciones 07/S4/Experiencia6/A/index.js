function mostrarPropiedadesWindow() {
    for (let propiedad in window) {
      console.log(propiedad);
    }
  }
  mostrarPropiedadesWindow();
  console.log("Ancho de la ventana: " + window.innerWidth);
  console.log("Altura de la ventana: " + window.innerHeight);
  console.log("URL actual: " + window.location.href);