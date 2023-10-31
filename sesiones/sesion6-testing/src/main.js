import './style.css'
import javascriptLogo from './javascript.svg'

import { suma } from './funciones.js'

document.querySelector('#app').innerHTML = `
  La suma de 3 + 2 es: ${suma(3,2)}
`

