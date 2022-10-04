function saludar(){
    return ("Hola que tal")
}

function caminar(){
    return ("caminando")
}

function descansar(){
    return ("descansando")
}

// función callback
function accion(funcion){
    return funcion()
}

console.log(accion(caminar))