# Creación de un proyecto con vite y testing con mocha y chai
1. Creamos la carpeta de proyecto y la abrimos en vscode
2. instalamos vite con `npm install vite`
3. Creamos el proyecto con `npm create vite@latest`
4. Probamos con `npm run dev`y vemos el proyecto con archivos básicos
5. Eliminamos todos los archivos y nos quedamos con un texto que inyectamos en 'app'
6. Movemos archivos a carpeta `src`
7. Configuramos vite.config.js:
   Ejemplo de vite.config.js

  // vite.config.js
import { defineConfig } from 'vite'

export default defineConfig({
  // Directorio raíz de tu proyecto
  root: './src',
  
  // Opciones de construcción
  build: {
    outDir: 'dist',  // Carpeta de salida para los archivos generados
    assetsDir: 'assets',  // Carpeta de assets (imágenes, CSS, etc.)
  },
  
  // Configuración de alias para rutas de importación
  resolve: {
    alias: {
      '@components': '/src/components',
    },
  },
})

## Funciones

1. Creamos archivo `funciones.js` y programamos función suma() que exportamos
2.  En archivo main.js importamos función suma() y la ejecutamos mostrando resultado en 'app'

## Instalamos ESLINT como dependencia de desarrollo con `npm i standard -D`
  Instalar ESLINT:
    https://www.cesarguerra.mx/configuracion-rapida-de-eslint-con-standard-js-para-proyectos-de-javascript-y-de-react-con-vite-js/
  Configurar para que se ejecute al grabar:
    https://www.cesarguerra.mx/activar-autocorrecion-autoformato-de-eslint-al-guardar-un-archivo-en-vs-code/
 
 ## Testing con Mocha y Chai
 1. Instalamos mocha y Chai como dependencias de desarrollo
 `npm i mocha -D`
 `npm i chai -D`
2. Configuramos package.json para que se ejecuten los archivos usando mocha `test: mocha`
3. Creamos la carpeta para los test y un archivo `funciones.test.js` con los tests de las funciones. De momento la función suma(). Recuerda que hay que importar las funciones y las librerias que uses.
  Como funciona mocha y chai: https://johnserrano.co/blog/test-con-mocha-y-chai

5.Ejecutamos los test con `npm run test` 