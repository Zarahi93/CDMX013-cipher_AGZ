const cipher = {

    encode: (offset, contr) => {
        if (offset <= 0 && typeof contr != 'string') {// Hace que cuando offset y contr se ingresan numeros negativos y tipos de datos no cadena marque error
            throw new TypeError();
        }
        let respuesta = ''; //Se declara la variable donde se guardara la respuesta
        for (let i = 0; i < contr.length; i++) {
            let letra = contr[i];//Separa cada letra una por una
            if (letra.match(/[a-z]/i) || letra.match(/[A-Z]/i)) {
                const codigo = contr.charCodeAt(i);//Obtener el codigo ASCII de la letra
                //Para mayusculas
                if (codigo >= 65 && codigo <= 90) {//Revisa que el codigo ASCII obtenido de la letra mayúscula este en el rango de las letras mayuculas
                    letra = String.fromCharCode(((codigo - 65 + Number(offset)) % 26) + 65);//reasigna el valor a la letra ya movida segun el despalazamiento
                }
                //Para minusculas
                else if (codigo >= 97 && codigo <= 122) {//Revisa que el codigo ASCII obtenido de la letra minúscula este en el rango de las letras minúsculas
                    letra = String.fromCharCode(((codigo - 97 + Number(offset)) % 26) + 97);
                }
            }
            respuesta += letra;//Concatena todas las letras despues de que fueron cifradas una por una.
        }
        return respuesta;
    },

    decode: (offset, contr) => {//Funcion flecha
        if (offset <= 0 && typeof contr != 'string') {
            throw new TypeError();
        }
        let respuesta = ''; //Se declara la variable donde se guardara la respuesta
        for (let i = 0; i < contr.length; i++) {
            let letra = contr[i];
            if (letra.match(/[a-z]/i) || letra.match(/[A-Z]/i)) {
                const codigo = contr.charCodeAt(i);//Obtener el codigo ASCII de la letra
                //Para mayusculas
                if (codigo >= 65 && codigo <= 90) {
                    letra = String.fromCharCode(((codigo - 90 - Number(offset)) % 26) + 90);
                }
                //Para minusculas
                else if (codigo >= 97 && codigo <= 122) {
                    letra = String.fromCharCode(((codigo - 122 - Number(offset)) % 26) + 122);
                }
            }
            respuesta += letra;//Concatena todas las letras despues de que fueron descifradas una por una.
        }
        return respuesta;
    }
};
export default cipher;