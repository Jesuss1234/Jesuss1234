function ExcepcionUsuario(mensaje) {
    this.mensaje = mensaje;
    this.nombre = 'ExcepcionUsuario';
}

function obtenerNombreMes(mes) {
    mes--;
    const meses = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul',
    'Ago', 'Sep', 'Oct', 'Nov', 'Dic'];
    if (meses[mes] !== undefined) {
        return meses[mes];
    } else {
        throw new ExcepcionUsuario('NúmeroMesInvalido');
    }
}

let nombreMes;

try {
    const miMes = 15;
    nombreMes = obtenerNombreMes(miMes);
} catch (e) {
    nombreMes = 'desconocido';
    console.error(e.mensaje, e.nombre);
}
