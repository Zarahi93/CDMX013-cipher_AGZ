import cipher from './cipher.js';

let contr = (document.getElementById('entrada').value);//Texto de entrada del usuario
let offset = (document.getElementById('saltos').value);//Número de desplazamiento ingresado por el usuario
let respuesta = document.getElementById('salida');//Texto de salida
//Configurar el boton de cifrado
const cifrar = document.getElementById('botonCifrar');//Sa asigna una variable al boton a utilizar
cifrar.addEventListener('click', function() {
  cipher.encode(offset, contr) 
});

//Configurar el boton de descifrado
const descifrar = document.getElementById('botonDescifrar');
descifrar.addEventListener('click', function() {
  cipher.decode(offset, contr) 
});

//console.log(cipher);
