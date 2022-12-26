let boton = document.getElementById("boton");
let id = document.getElementById("idPersona");

boton.addEventListener("click", ()=>{

    fetch('http://localhost:3000/personas/' + id.value)
    .then(response => response.json())
    .then(data => mostrarDatos(data));

})


let contenidoTabla = "";

function mostrarDatos(data){

  // [{id:1, nombre: "Pedro", apellido:"Perez"}, {id:1, nombre: "Pedro", apellido:"Perez"}]

    contenidoTabla =    "<tr><th>Id</th><th>Nombre</th><th>Apellido</th></tr>"


    data.forEach(element => {
      contenidoTabla = contenidoTabla + "<tr> <td>" + element.id + "</td>" +
      "<td>" + element.nombre + "</td>" + "<td>" + element.apellido + "</td> </tr> " 
    });

    document.getElementById("tablaPersonas").innerHTML = contenidoTabla;

}