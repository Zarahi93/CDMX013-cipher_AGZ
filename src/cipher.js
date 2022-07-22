const cipher = function cifradoCesar() {
  let entrada = document.getElementById('paCifrar').value;
  let solucion= '';
  let shiftInput = parseInt(document.getElementById('shiftInput').value);

  for (let i = 0; i < entrada.length; i++) {
   let ascii_num = entrada[i].charCodeAt()//regresa el codigo para cada letra
   let sum = ascii_num + shiftInput
   sum >= 65 && sum <= 90 ? solucion += String.fromCharCode(sum) : sum > 90 ? solucion += String.fromCharCode(65+(sum & 91)): solucion += entrada [i]
  }
salida.value = solucion
};

botonCifrado.addEventListener('click',cipher)

export default cipher;

cipher.encode(offset0, entrada)

cipher.decode(offset1, )