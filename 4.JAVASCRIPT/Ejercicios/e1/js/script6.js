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

function sumar(a, b){
    return a + b;
}
console.log(sumar(5, 3));

let sumarOtraForma = function(a,b){
    return a + b;
}
console.log(sumarOtraForma(5, 3));