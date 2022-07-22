import cipher from './cipher.js';

console.log(cipher);

let botonCifrado = document.getElementById('cb'); //boton para cifrar
let botonDescifrado = document.getElementById('dcb');//boton para descifrar
let offset0 = document.getElementById('c');//Número de posiciones que queremos mover a la derecha en el alfabeto
let offset1 = document.getElementById('dc');//Número de posiciones que queremos mover a la izquierda en el alfabeto
let salida = document.getElementById('resCif'); // Donde la contraseña cifrada/descifrada aparecera
let entrada = document.getElementById('paCifrar');// el texto a cifrar
let entrada1 = document.getElementById('paDescifrar');// texto a descifrar
let inputs= [entrada,salida];

inputs.forEach( input => {
    input.oninput = () => {
        input.value.toUpperCase()//transforma todas las letras a mayuscula
    }
});
