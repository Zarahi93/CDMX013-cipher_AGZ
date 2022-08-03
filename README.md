# Cifrado César

## Índice

* [1. Preámbulo](#1-preámbulo)
* [2. Resumen del proyecto](#2-resumen-del-proyecto)
* [3. Usuario](#3-usuario)
* [4. Diseño](#4-diseño)
* [5.Instrucciones](#5-criterios-de-aceptación-mínimos-del-proyecto)

***

## 1. Preámbulo

Cifrar significa codificar. El [cifrado César](https://en.wikipedia.org/wiki/Caesar_cipher)
es uno de los primeros métodos de cifrado conocidos. El emperador romano Julio
César lo usaba para enviar órdenes secretas a sus generales en los campos de
batalla.

![caeser-cipher](https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Caesar3.svg/2000px-Caesar3.svg.png)

El cifrado césar es una de las técnicas más simples para cifrar un mensaje. Es
un tipo de cifrado por sustitución, es decir que cada letra del texto original
es reemplazada por otra que se encuentra un número fijo de posiciones
(desplazamiento) más adelante en el mismo alfabeto.

Por ejemplo, si usamos un desplazamiento (_offset_) de 3 posiciones:

* La letra A se cifra como D.
* La palabra CASA se cifra como FDVD.
* Alfabeto sin cifrar: A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
* Alfabeto cifrado: D E F G H I J K L M N O P Q R S T U V W X Y Z A B C

En la actualidad, todos los cifrados de sustitución simple se descifran con
mucha facilidad y, aunque en la práctica no ofrecen mucha seguridad en la
comunicación por sí mismos; el cifrado César sí puede formar parte de sistemas
más complejos de codificación, como el cifrado Vigenère, e incluso tiene
aplicación en el sistema ROT13.

## 2. Resumen del proyecto

En este proyecto crearás una aplicación web que servirá para que el usuario
pueda cifrar y descifrar un texto indicando un desplazamiento específico de
caracteres (_offset_).

Se utiliza el cifrado Cesar con la finalidad de que el usuario pueda crear claves 
seguras para su email o algun otro tipo de contraseña en general. 

### Funcionalidad

El programa funciona tanto para mayúsculas como minúsculas mas no en caracteres especiales, la letra Ñ o en alguna letra con acento, diéresis, espacios, etc. 

## 3. Usuario

Los usuarios serian personas interesadas en aumentar la seguridad de sus contraseñas mediante la codificación de estas. Enfocandoce  en las personas que les gusta escribir sus contraseñas en papel, ya que solo tendrian que recordar un número y no habria problema alguno si alguien encuentra la contraseña escrita ya que no les serviria de nada al no estar codificada y no tener el número de desplazamientos.

## 4. Diseño
El diseño inicial es muy sencillo y la idea era tener dos cajas diferentes de contenido para el cifrado y descifrado, los mensajes cifrados y descifrados aparecerian en un alert en pantalla.
![Diseño inicial](/Demo.png)

Al final elegi utilizar una misma caja de contenido, cambiar los colores por unos menos brillantes y agregar un boton para limpiar todos los campos sin tener que recargar la pagína.
![Apariencia final](/final.png)

## 5. Instrucciones

Usa el alfabeto simple (sin asentos, diéresis y sin ñ):

* A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
* a b c d e f g h i j k l m n o p q r s t u v w x y z 

Si utilizas caracteres especiales y/o espacios, estos no seran modificados de ninguna manera y conservaran su posición. 

### Definición del producto

En el README.md, cuéntanos cómo pensaste en los usuarios y cuál fue tu proceso
para definir el producto final a nivel de experiencia y de interfaz.

* Quiénes son los principales usuarios de producto.
* Cuáles son los objetivos de estos usuarios en relación con tu producto.
* Cómo crees que el producto que estás creando está resolviendo sus problemas.

