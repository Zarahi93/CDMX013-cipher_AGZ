const cipher = {
  
encode: (offset,contr)=> {
    console.log(contr)
    console.log(offset)
        let respuesta=''; //Se declara la respuesta
        for (let i=0; i<contr.length;i++){
            let letra= contr[i];
            console.log(letra)
            if (letra.match(/[a-z]/i) || letra.match(/[A-Z]/i)){
                const codigo = contr.charCodeAt(i);//Obtener el codigo ASCII de la letra
               console.log(codigo)
                //Para mayusculas
                if(codigo >= 65 && codigo <= 90){
                    letra= String.fromCharCode( ( (codigo - 65 + Number(offset) ) % 26 ) + 65 );
                }
                //Para minusculas
                else if (codigo>=97 && codigo<=122){
                    letra= String.fromCharCode( ( (codigo - 97 + Number(offset) ) % 26 ) + 97 );
                }
                console.log(letra)
            }
            respuesta += letra;
            console.log(respuesta)

        }
        return respuesta;
    }

//decode: function (offset,contr) {},
};
 export default cipher;