# Ejercicio 2 - Ficha

A partir de los archivos de esta carpeta, crea el script necesario para implementar la siguiente funcionalidad:
- Al pulsar el botón 'Crear Ficha' los datos del formulario se deben mostrar en la ficha de la columna de la derecha.

![image](https://github.com/carrebola/2324-M6-Ejercicios/assets/61465929/d2536c9d-3e25-41e1-8294-f1f2a2629477)

## Procedimiento
1. Crea un archivo main.js y vincúlalo con el index.html. (Verifica su funcionamiento con un console.log())
2. Añade en el html un valor por defecto a los inputs. A continuación captura en diferentes variables el value de estos y muestralos por consola. 
3. Crea una función que agrupe el código anterior. Pruébala.
4. Captura el botón 'Crear ficha' y añadele un observador de eventos (addEventListener) que llame a tu función cuando haces click.
5. Modifica el código html añadiendo los ids necesarios para poder seleccionar las etiquetas donde van los datos nombre, dni, imagen, etc.
6. Inyecta (con **innerHTML**) el contenido de las variables en la ficha

NOTA: Para añadir la imagen tienes dos opciones:
  - Crear un div que envuelva la etiqueta <img> e inyectar en este div el código html correspondiente a la imagen
  - Modificar el atributo **src** de la imagen con **setAttribute()**
