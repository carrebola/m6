import { cervezasBD } from './cervezasBD.js'
export const muestraCervezas = () => {
  cervezasBD.forEach(element => {
    console.log('nombre cerveza: ', element.nombre)
  })
}
