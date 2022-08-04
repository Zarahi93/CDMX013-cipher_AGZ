import cipher from './cipher.js';

let contr = (document.getElementById('entrada'));//Guarda en una variable el texto de entrada del usuario
let offset = (document.getElementById('saltos'));//Captura en una variable el número de desplazamiento ingresado por el usuario
let respuesta = document.getElementById('salida');//Guarda en una variable el texto de salida y le dice donde mandarlo
//Configurar el boton de cifrado
const cifrar = document.getElementById('botonCifrar');//Sa asigna una variable al boton a utilizar
cifrar.addEventListener('click', function() {//Manda a llamar la funcion al momento de dar click al botón
 const textoCifrado= cipher.encode(offset.value, contr.value);//Guarda en una variable la solucion de la función
 respuesta.value = textoCifrado //Le dice donde mandar la solución de la función
});

//Configurar el boton de descifrado
const descifrar = document.getElementById('botonDescifrar');
descifrar.addEventListener('click', function() {
  const textoDescifrado= cipher.decode(offset.value, contr.value);
  respuesta.value = textoDescifrado 
});
//Cofigurar boton para limpiar todos los campos
//Se rellena con una cadena vacia los valores que queremos "Limpiar"
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
