// Condicionales

let edad = 15;
console.log("Condicional if si edad >= 18")
if (edad>=18){
    console.log("Es mayor de edad")
}
else {
    console.log("Es menor de edad")
}
// bucle while
console.log("Bucle While de 1 a 17")
edad = 1;
while (edad < 18){
    console.log("es menor de edad, tiene ", edad, " años.")
    edad++;
}

// bucle for
console.log("Bucle for variable i mientras i sea menor a 10")
for (let i = 0; i < 10; i++){
    console.log(i);
}

// Switch
console.log("Switch de numero = 2");
let numero = 2;

switch (numero){
    case 1: console.groupCollapsed('Uno');
        break;
    case 2: console.groupCollapsed('Dos');
        break;
    case 3: console.groupCollapsed('Tres');
        break;
    default: console.groupCollapsed('Numero incorrecto');
}