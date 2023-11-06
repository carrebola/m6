// Importamos funcion
import { muestraCervezas } from './misFunciones/muestraCervezas.js'

// Importamos componentes
import header from './componentes/header.js'
import main from './componentes/main.js'
import footer from './componentes/footer.js'

// Ejecutamos función importada
muestraCervezas()

// Inyectamos los templates de cada componente
document.querySelector('header').innerHTML = header.template
document.querySelector('main').innerHTML = main.template
document.querySelector('footer').innerHTML = footer.template
// Ejecutamos script del componente footer
footer.script()
