import { cervezas } from './cervezas.js'
export const muestraCervezas = () => {
  cervezas.forEach(element => {
    console.log('nombre cerveza: ', element.nombre)
  })
}
