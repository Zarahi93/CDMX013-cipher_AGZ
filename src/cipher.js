
const cipher = {
    function inicio(){
        document.getElementById("entrada").addEventListener("keyup", function(){
            this.value = this.value.toUpperCase();
        }, true);
        
        document.getElementById("botonCifrar").addEventListener("click",function(){  
            let texto = document.getElementById("entrada").value;
            let desplazamiento = document.getElementById("desplazamiento").value;               
            document.getElementById("salida").value = cifrar2(texto, desplazamiento);
        },true);
        document.getElementById("botonDescifrar").addEventListener("click",function(){  
            let texto = document.getElementById("entrada").value;
            let desplazamiento = document.getElementById("desplazamiento").value;                               
            document.getElementById("salida").value = descifrar(texto, desplazamiento);
        },true);
    }
    
    function cifrar(texto, desplazamiento) {
        if (!texto) 
            return ''; 
        const letras = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        desplazamiento = (desplazamiento % 26 + 26) % 26; 
        return texto.replace(/[A-Z]/ig, c => letras[(letras.indexOf(c) + desplazamiento) % 26]);
    }
    
    function descifrar(texto, desplazamiento) {
        if (!texto) 
            return ''; 
        const letras = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        desplazamiento = (desplazamiento % 26 - 26) % 26; 
        return texto.replace(/[A-Z]/ig, c => letras[(letras.indexOf(c) - desplazamiento) % 26]);
    }
    
    function cifrar2(texto, desplazamiento) {
        let resultado='';
        let letras = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        desplazamiento = (desplazamiento % 26 + 26) % 26; 
        
        if (texto){
            for (let i=0; i<texto.length; ++i){
                if (letras.indexOf(texto[i])!=-1)
                { 
                    let posicion=((letras.indexOf(texto[i])+desplazamiento) % 26);
                    resultado+=letras[posicion];
                }
                else
                    resultado+=texto[i]; 
            }
        }
        return resultado;
    }
}
export default cipher;

