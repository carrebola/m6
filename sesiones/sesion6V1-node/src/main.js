// Importamos funcion
import { muestraCervezas } from './misFunciones/consoleCervezas.js'

// Importamos componentes
import header from './componentes/header.js'
import main from './vistas/vistaHome.js'
import { footer } from './componentes/footer.js'

// Ejecutamos función importada
muestraCervezas()

// Inyectamos los templates de cada componente
document.querySelector('header').innerHTML = header.template
document.querySelector('main').innerHTML = main.template
document.querySelector('footer').innerHTML = footer('El hombre vainilla')
