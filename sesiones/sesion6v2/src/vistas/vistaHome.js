import { cervezas } from '../componentes/cervezas.js'

// Vista home
export const vistaHome = {
  template: // html
    `
    <h1>Vista Home</h1>
    <div id="cervezas" style="border:1px solid">Aquí van las birras</div>

  `,
  script: () => {
    console.log('Hola desde vistaHome')
    // Cargamos el componente cervezas
    document.querySelector('#cervezas').innerHTML = cervezas.template
    // Ejecutamos la lógica de cervezas
    cervezas.script()
  }
}
