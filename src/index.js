import cipher from './cipher.js';

let contr = document.getElementById('entrada');//texto de entrada del usuario
let offset = document.getElementById('saltos');//Número de desplazamiento ingresado por el usuario
let respuesta = document.getElementById('salida');//Texto de salida
//Configurar el boton de cifrado
const cifrar = document.getElementById('botonCifrar');
cifrar.onclick = function() {
  cipher.encode(offset, contr)
};
//Configurar el boton de descifrado
const descifrar = document.getElementById('botonDescifrar');
descifrar.onclick = function (){
  cipher.decode(offset, contr)
};

//Configurar el boton para limpiar campos
//Se reyena con una cadena vacia los valores que queremos "Limpiar"
contr.value = '';
const clear = document.getElementById('Limpiar');
clear.addEventListener('click', function handleClick() {
  console.log(contr.value);
  contr.value = '';
});

console.log(cipher);
