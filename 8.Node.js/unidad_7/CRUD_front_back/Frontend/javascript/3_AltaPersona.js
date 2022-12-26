let formulario = document.getElementById("formulario"); 
let nombre = document.getElementById("nombre");
let apellido = document.getElementById("apellido");



formulario.addEventListener("submit", (e)=>{

    e.preventDefault();

    var url = 'http://localhost:3000/personas/';
    var data = {nombre: nombre.value,
                apellido: apellido.value};
    
    fetch(url, {
      method: 'POST', // or 'PUT'
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



