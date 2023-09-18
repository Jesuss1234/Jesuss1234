const x = "declarado fuera de la función";

function ejemploFuncion() {
    const x = "declarado dentro de la función";
    console.log("Dentro de la función");
    console.log(x);
}

console.log(x);

ejemploFuncion();

console.log("Fuera de la función");
console.log(x);

function f() {
    try {
        console.log(0);
        throw 'falso';
    } catch (e) {
        console.log(1);
        return true;
    } finally {
        console.log(3);
        return false;
    }
}

console.log(f());
