// obtener elementos del HTML por id
const btnResumen = document.getElementById("botonResumen");
const campoTotal = document.getElementById("campoTotal");

// funcion
function calcular(cant, cat){
    let ticket = 200;
    let descuento;
    switch(cat){
        case 'Estudiante':
            descuento= 0.8;
            return cant * (ticket*descuento);
        break;
        case 'Trainee':
            descuento= 0.5;
            return cant * (ticket*descuento);
        break;
        case 'Junior':
            descuento= 0.15;
            return cant * (ticket*descuento);
        break;        
    }
    
}

function mostrar(){
    let cantidad = document.getElementById("cantidad").value;
    let categoria = document.getElementById("categoria").value;
    let total = calcular(cantidad, categoria); 
    let texto = '<div class="alert alert-primary" role="alert">' +
    'Total a Pagar: $ ' + total + '</div>';       
    campoTotal.innerHTML = texto;
}

// calcular con funcion
btnResumen.addEventListener('click', mostrar);