// funciones

function saludar(){
    return "Hola Silvia"
}
console.log(saludar());

// funcion con parametros
function saludarNombre(nombre){
    return "hola " + nombre;
}
console.log(saludarNombre("Jorge"));

// función declarada
function sumar(a, b){
    return a + b;
}
console.log(sumar(5, 3));

// función expresada
let sumarOtraForma = function(a,b){
    return a + b;
}
console.log(sumarOtraForma(5, 3));

// función flecha
let sumarFlecha = (a, b) => a + b;

let sumarFlechaAmpliada = (a, b) => {
    return a + b;
}