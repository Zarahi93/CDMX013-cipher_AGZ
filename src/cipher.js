const cipher = {
  
    encode: function (offset,contr){
        for (let i= 0; i<contr.length; i++){
            let code = contr.charCodeAt(i)+ offset
            while (code>90) {
                code = (code-90)+65
            }
            respuesta.push(String.fromCharCode(code))
        }
        return respuesta.join('')

   // decode: function (offset,contr) {}

}
}
 export default cipher;