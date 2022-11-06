// importamos/requerimos el modulo http y lo aisgamos a una variable.
const http = require("http")

// creamos una funcion que recibe una solicitud y genera una respuesta y la asigamos a una variable
const mensajes = function(request, response){
	response.writeHead(200, {"Content-Type":"text/html; charset=utf-8"});
	response.write("<h1>Este es el encabezado</h1>");
	response.end("este es el ultimo mensaje");
	console.log("ejecutando servidor en puerto 4000.")
}
// ejecutamos el servidor http de node con los mensajes de solicitud y respuesta en el puerto 4000.
const servidor = http.createServer(mensajes);
servidor.listen(4000);