//Configurar el boton para limpiar campos
//Se reyena con una cadena vacia los valores que queremos "Limpiar"
contr.value = '';
offset.value = '';
respuesta.value = '';
const clear = document.getElementById('Limpiar');//Se le asigna una variable al boton a utilizar
clear.addEventListener('click', function() {//se utiliza la variable para que cuando se haga click en el boton, se ejecute la función
  contr.value = '';
  offset.value = '';
  respuesta.value = '';
});