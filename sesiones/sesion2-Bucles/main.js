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
const diasSemana = 
[
  'lunes',
  'martes',
  'miércoles',
  'jueves',
  'viernes',
  'sabado',
  'domingo'
]

console.log(diasSemana);
//Muestra un elemento del array
console.log(diasSemana[3]);
// Mostrar todos los días de la semana
const longitudArray = diasSemana.length
for(let i=0; i<longitudArray; i++){
  // console.log(i,diasSemana[i])
}

// Otra manera de recorrer un array

diasSemana.forEach((element, index) => {
  // console.log('forEach: ', index,element);
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

// Creamos tabla a partir de json
const jsonSillas =
[
    {
      "nombre": "Silla de Comedor",
      "material": "Madera",
      "color": "Blanco",
      "estilo": "Moderno",
      "precio": 150.00,
      "disponibilidad": true
    },
    {
      "nombre": "Silla de Oficina",
      "material": "Metal y Cuero",
      "color": "Negro",
      "estilo": "Ejecutivo",
      "precio": 250.00,
      "disponibilidad": true
    },
    {
      "nombre": "Silla de Jardín",
      "material": "Plástico",
      "color": "Verde",
      "estilo": "Exterior",
      "precio": 50.00,
      "disponibilidad": false
    },
    {
      "nombre": "Silla de Bar",
      "material": "Acero Inoxidable",
      "color": "Plateado",
      "estilo": "Contemporáneo",
      "precio": 80.00,
      "disponibilidad": true
    }
  ]

  // console.log('nombre de silla 1: ',jsonSillas[1].nombre)

  function pintaSillas(){
    let tabla = `
    <table>
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Precio</th>
        </tr>
      </thead>
      <tbody>  
    `
    jsonSillas.forEach(element => {
      // console.log(element.nombre)
      tabla += `<tr><td>${element.nombre}</td><td>${element.precio}</td></tr>`
    });
  
    tabla+= `
      </tbody>
    </table>
    `
    document.querySelector('#tabla').innerHTML = tabla
  }

  
  const sillaNueva = {
    "nombre": "Silla de clase",
    "material": "Acero ",
    "color": "Plateado",
    "estilo": "Contemporáneo",
    "precio": 200.00,
    "disponibilidad": true
  }
  jsonSillas.push(sillaNueva)
  console.log(jsonSillas);

pintaSillas()