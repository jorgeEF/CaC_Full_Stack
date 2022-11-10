function sumar(num1, num2){
    return num1 + num2;
}

function restar(num1, num2){
    return num1 - num2;
}

let multiplicar = function(num1, num2){
    return num1 * num2;
}

let dividir = (num1, num2) => {
    return num1 / num2;
}

//console.log(sumar(20, 50));

// exportamos las funciones que queremos sean accesibles desde otro js
exports.sumar = sumar;
exports.restar = restar;
exports.multiplicar = multiplicar;
exports.dividir = dividir;