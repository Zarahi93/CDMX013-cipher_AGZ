import cipher from './cipher.js';

console.log(cipher);

let botonCifrado = document.getElementById('cb'); //boton para cifrar
let salida = document.getElementById('resCif'); // donde la contraseña cifrada aparecera
let entrada = document.getElementById('paCifrar');// el texto a cifrar
let inputs= [entrada,salida];

inputs.forEach( input => {
    input.oninput = () => {
        input.value.toUpperCase()//transforma todas las letras a mayuscula
    }
})
