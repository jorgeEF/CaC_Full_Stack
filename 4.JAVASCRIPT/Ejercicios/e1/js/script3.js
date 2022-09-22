// hacer un programa que dado un numero de 1 a 3 imprima el numero con letras

let numero = 4;

// if (numero == 1){
//     console.log('El numero es Uno')
// }
// else if (numero == 2){
//     console.log('El numero es Dos')
// }

// else if (numero == 3){
//     console.log('El numero es Tres')
// }
// else{
//     console.log('Puso otro numero')
// }

switch (numero){
    case 1: console.groupCollapsed('Uno');
        break;
    case 2: console.groupCollapsed('Dos');
        break;
    case 3: console.groupCollapsed('Tres');
        break;
    default: console.groupCollapsed('Numero incorrecto');

}