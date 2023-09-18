const foo = () => {
    console.log("foobar");
}
foo();
function decirHola() {
    return "Hola, ";
}
function saludo(mensajeHola, nombre) {
    console.log(mensajeHola() + nombre);
}
saludo(decirHola, "JavaScript!");
function decirHola() {
    return () => {
        console.log("¡Hola!");
    };
}