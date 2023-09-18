function crearFuncion() {
    const nombre = 'Mozilla';
    function mostrarNombre() {
        console.log(nombre);
    }
    return mostrarNombre;
}
const miFuncion = crearFuncion();
miFuncion();