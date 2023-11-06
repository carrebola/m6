# Node, npm , import y export
1. Instalamos nodejs
2. Creamos proyecto con `npm init`
3. Creamos carpeta src con index.html y main.js
4. Vinculamos archivos y probamos
5. Instalamos eslint con `npm install standard -D`y configuramos package.json con
    "eslintConfig": {
    "extends": [
      "./node_modules/standard/eslintrc.json"
    ]
  }
6. Creamos carpeta misfunciones
7. Creamos archivo cervezas.js que exportará 'cervezas', (un array de datos)
8. Creamos el archivo muestraCervezas (una función que usa el array). La exportamos
9. En main.js importamos muestraCervezas y la ejecutamos

## Montando una SPA
1. Creamos carpeta `componentes` con header.js, main.js y footer.js
2. Creamos los componentes (archivos js con un template para inyectar)
3. Desde main.js cargamos componentes y los inyectamos en las etiquetas header, main y footer
