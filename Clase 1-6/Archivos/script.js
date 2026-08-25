alert("Hola muy buenos días, bienvenido a la clase de programación en la web")
const nombre=prompt("Cual es tu nombre")

//para cambiar el contenido de un elemento HTML, primero debemos obtenerlo mediante su id
const parrafo = document.getElementById("nombre");
parrafo.textContent = nombre;
console.log(`mi nombre es: ${nombre}`)