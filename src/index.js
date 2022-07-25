import cipher from './cipher.js';

console.log(cipher);

let string = document.getElementById('entrada');
let offset = document.getElementById('desplazamiento');
let respuesta = document.getElementById('salida');
let cifrar = document.getElementById('botonCifrar');
let descifrar = document.getElementById('botonDescifrar');
let reset = document.getElementById('Limpiar');

cifrar.addEventListener('clik', function() {
  cipher.encode(offset.value, string.value)

});

descifrar.addEventListener('click', function (){
  cipher.decode(offset.value, string.value)
});
