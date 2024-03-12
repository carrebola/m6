export const footer = (nombre) => {
  const template = // html
    `
    <h3>Autor: <em><span id="autor">${nombre}</span></em></h3>
    `
  // Devolvemos el html con el nombre integrado en el template
  return template
}
