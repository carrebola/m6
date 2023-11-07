import { cerveza } from './cerveza.js'

export const cervezas = (cervezasBD) => {
  let template = '<div id="cervezas" style="display:flex; gap:20px;">'

  cervezasBD.forEach(element => {
    template += cerveza(element.nombre)
  })

  template += '</div>'
  return template
}
