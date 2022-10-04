// obtener elementos del HTML por id
let btnDos = document.getElementById("botonDos");
let btnTres = document.getElementById("botonTres");
let frasePpal = document.getElementById("frasePrincipal");

// funcion expresada
btnDos.addEventListener("click", function(){
    console.log("Dos")
})

// funcion declarada
function Tres(){
    console.log("Tres")
}
// llamada funcion declarada
btnTres.addEventListener("click", Tres)


// aplicar estilos

function textoNegro(){
    frasePpal.style.color = "black"
}

function textoRojo(){
    frasePpal.style.color = "red"
}

btnDos.addEventListener("click", textoNegro)

btnTres.addEventListener("click", textoRojo)
