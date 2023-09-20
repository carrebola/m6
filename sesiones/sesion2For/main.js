console.log('sesión 2');

// Bucles
let i=0
while(i<10){
  // console.log('iteración while', i)
  i++
}

for(let i=0; i<10; i++){
  // console.log('iteración ',i);
}

// Arrays
const arrayVacio = []
const diasSemana = ['lunes','martes','miércoles','jueves','viernes','sabado','domingo']

console.log(diasSemana);
//Muestra un elemento del array
console.log(diasSemana[3]);
// Mostrar todos los días de la semana
const longitudArray = diasSemana.length
for(let i=0; i<longitudArray; i++){
  console.log(i,diasSemana[i])
}

// Otra manera de recorrer un array

diasSemana.forEach((element, index) => {
  console.log('forEach: ', index,element);
});

// Creamos una lista con los días de la semana y la inyectamos en un div del documento. Usamos for
// Creamos la variable con el html
let lista = `<ul>`
// añadimos los li generados por el for
for(let i=0;i<diasSemana.length;i++) {
  lista+= `<li>${diasSemana[i]}</li>`
}
// completamos el html cerrando el ul
lista+= `</ul>`
// inyectamos la lista construida en un div
document.querySelector('#dias').innerHTML = lista

// idem con foreach
let lista2 = `<table>`
diasSemana.forEach(element => {
  lista2+=`<tr><td style="border: 1px solid">${element}<td></tr>`
});
lista2+= `</table>`

document.querySelector('#dias').innerHTML = lista2