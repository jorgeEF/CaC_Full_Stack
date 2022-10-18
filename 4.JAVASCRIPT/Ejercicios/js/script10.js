// carga de elementos remotos sin recarga:
// XLMHttpRequest https://developer.mozilla.org/es/docs/Web/API/XMLHttpRequest
// es un objeto JavaScript que fue diseñado por Microsoft y adoptado por Mozilla, Apple y Google. Actualmente es un estándar de la W3C. Proporciona una forma fácil de obtener información de una URL sin tener que recargar la página completa. Una página web puede actualizar sólo una parte de la página sin interrumpir lo que el usuario está haciendo. XMLHttpRequest es ampliamente usado en la programación AJAX.

// A pesar de su nombre, XMLHttpRequest puede ser usado para recibir cualquier tipo de dato, no solo XML, y admite otros formatos además de HTTP (incluyendo file y ftp).

// Para crear una instancia de XMLHttpRequest, debes hacer lo siguiente:
// var req = new XMLHttpRequest();
let xhr = new XMLHttpRequest();
let externo = new XMLHttpRequest();

xhr.open("get", "./archivo.txt");

xhr.send();

//setTime(()=> console.log("texto recibido ", xhr.responseText), 3000);

xhr.addEventListener("load", ()=>{
    // console.log("texto recibido ", xhr.responseText)
    let section = document.createElement("section");
    section.innerHTML = xhr.responseText;
    document.body.appendChild(section);
})

// tomamos un json externo 
externo.open("get", "https://jsonplaceholder.typicode.com/users");
externo.send();

externo.addEventListener("load", ()=>{
    console.log(JSON.parse(externo.responseText))    
})