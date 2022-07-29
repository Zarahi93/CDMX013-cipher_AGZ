import cipher from './cipher.js';

let contr = (document.getElementById('entrada'));//Texto de entrada del usuario
let offset = (document.getElementById('saltos'));//Número de desplazamiento ingresado por el usuario
let respuesta = document.getElementById('salida');//Texto de salida
//Configurar el boton de cifrado
const cifrar = document.getElementById('botonCifrar');//Sa asigna una variable al boton a utilizar
cifrar.addEventListener('click', function() {
 const textoCifrado= cipher.encode(offset.value, contr.value);
 respuesta.value = textoCifrado 
});

//Configurar el boton de descifrado
const descifrar = document.getElementById('botonDescifrar');
descifrar.addEventListener('click', function() {
  const textoDescifrado= cipher.decode(offset.value, contr.value);
  respuesta.value = textoDescifrado
});
//Cofigurar boton para limpiar todos los campos
//Se reyena con una cadena vacia los valores que queremos "Limpiar"
contr.value = '';
offset.value = '';
respuesta.value = '';
const clear = document.getElementById('Limpiar');//Se le asigna una variable al boton a utilizar
clear.addEventListener('click', function() {//se utiliza la variable para que cuando se haga click en el boton, se ejecute la función
  contr.value = '';
  offset.value = '';
 respuesta.value = '';
});
console.log(cipher);
