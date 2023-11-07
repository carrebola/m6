import { cervezas } from '../componentes/cervezas.js'
import { cervezasBD } from '../misFunciones/cervezasBD.js'

export default {
  template: // html
    `
  <h1>Vista Home</h1>
  ${cervezas(cervezasBD)}
  `
}
