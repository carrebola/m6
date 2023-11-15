export const header = {
  template: '<p>Encabezado <span id="user"></span></p>',
  script: () => {
    document.querySelector('#user').innerHTML = 'anonimo@gmail.com'
  }
}
