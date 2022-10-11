// obtener elementos del HTML por id
const btnResumen = document.querySelector("#botonResumen");
const campoTotal = document.querySelector("#campoTotal");
let cantidad;
let categoria;
let total;
let texto;

// evento click
btnResumen.addEventListener('click', mostrar);

// mostrar
function mostrar(){  
    cantidad = document.querySelector('#cantidad').value;
    categoria = document.querySelector('#categoria').value;  
    total = calcular(cantidad, categoria); 
    texto = '<div class="alert alert-primary" role="alert">' +
    'Total a Pagar: $' + total + '</div>';       
    campoTotal.innerHTML = texto;
}

// calcular
function calcular(cant, cat){
    let ticket = 200;
    let descuento;
    switch(cat){
        case 'Estudiante':
            descuento= 0.8;
            return cant * (ticket - (ticket*descuento));
        break;
        case 'Trainee':
            descuento= 0.5;
            return cant * (ticket - (ticket*descuento));
        break;
        case 'Junior':
            descuento= 0.15;
            return cant * (ticket - (ticket*descuento));
        break;
        default: return 0;
    }    
}