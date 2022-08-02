const cipher = {

    encode: (offset, contr) => {
        if (offset <= 0 && typeof contr != 'string') {// Hace que cuando offset y contr se ingresan numeros negativos y tipos de datos no cadena marque error
            throw new TypeError();
        }
        let respuesta = ''; //Se declara la variable donde se guardara la respuesta
        for (let i = 0; i < contr.length; i++) {
            let letra = contr[i];
            if (letra.match(/[a-z]/i) || letra.match(/[A-Z]/i)) {
                const codigo = contr.charCodeAt(i);//Obtener el codigo ASCII de la letra
                //Para mayusculas
                if (codigo >= 65 && codigo <= 90) {
                    letra = String.fromCharCode(((codigo - 65 + Number(offset)) % 26) + 65);
                }
                //Para minusculas
                else if (codigo >= 97 && codigo <= 122) {
                    letra = String.fromCharCode(((codigo - 97 + Number(offset)) % 26) + 97);
                }
            }
            respuesta += letra;
        }
        return respuesta;
    },

    decode: (offset, contr) => {
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
            respuesta += letra;
        }
        return respuesta;
    }
};
export default cipher;