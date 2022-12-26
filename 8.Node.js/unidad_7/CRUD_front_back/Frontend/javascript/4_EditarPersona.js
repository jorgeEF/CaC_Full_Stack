let boton = document.getElementById("boton");
let id = document.getElementById("idPersona");

let formulario = document.getElementById("formulario"); 
let nombre = document.getElementById("nombre");
let apellido = document.getElementById("apellido");

boton.addEventListener("click", ()=>{

    fetch('http://localhost:3000/personas/' + id.value)
    .then(response => response.json())
    .then(data => {
            nombre.value = data[0].nombre;
            apellido.value = data[0].apellido;
    });

})

formulario.addEventListener("submit", (e)=>{

    e.preventDefault();

    var url = 'http://localhost:3000/personas/' + id.value;
    var data = {nombre: nombre.value,
                apellido: apellido.value};
    
    fetch(url, {
      method: 'PUT', // or 'PUT'
      body: JSON.stringify(data), // data can be `string` or {object}!
      headers:{
        'Content-Type': 'application/json'
      }
    }).then(res => res.json())
    .catch(error => console.error('Error:', error))
    .then(response => {
                alert("Formulario enviado al Servidor Exitosamente!");
                location.href = "./../index.html"
    });


})

document.getElementById("btnCancelar").addEventListener("click",()=>{
    location.href = "./../index.html"
})
