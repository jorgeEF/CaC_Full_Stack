// obtener elementos del HTML por id
let btnResumen = document.getElementById("botonResumen");
let calculo = document.getElementById("mostrarCalculo");
let texto = document.createElement("texto");
let cantidad = document.getElementById("cantidad");
let categoria = document.getElementById("categoria");
let total;

// funcion
function calcular(cant, cat){
    let ticket = 200;
    let descuento = 0;
    switch(cat){
        case "Estudiante":
            descuento= 0.8;
            return cant * (ticket*descuento);
        break;
        case "Trainee":
            descuento= 0.5;
            return cant * (ticket*descuento);
        break;
        case "Junior":
            descuento= 0.15;
            return cant * (ticket*descuento);
        break;        
    }
    
}
// calcular con funcion
btnResumen.addEventListener("click", total = calcular(cantidad, categoria));

// aplicar texto 

texto.innerText =
    <div class="alert alert-primary" role="alert">
              Total a Pagar: ${total}
    </div>;

btnResumen.addEventListener("click", calculo.appendChild(texto));