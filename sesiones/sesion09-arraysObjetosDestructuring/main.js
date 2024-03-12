console.log('Hola Sesión 9');
const user = {
  id: 1,
  nombre: 'Ramón',
  apellidos: 'Sánchez',
}

console.log('user: ', user);

const userCompleto = {
  ...user, // clonación superficial de user
  dni: 123456789
}

console.log('user y userCompleto: ', user, userCompleto);
user.nombre = 'Pepe'
console.log('user y userCompleto: ', user, userCompleto);


// Copia por valor

let plato1 = {
  nombre: 'Salchichas',
  precio: '20€'
}

let plato2 = plato1

console.log('plato1 y plato2: ', plato1, plato2);

plato1.nombre = 'Morcillas'

console.log('plato1 y plato2: ', plato1, plato2);

plato2 = { ...plato1 } // clonación superficial
plato1.nombre = 'jamón'
console.log('plato1 y plato2: ', plato1, plato2);


let menuLunes = {
  dia: 'lunes',
  platos: ['gazpacho', 'lomo', 'manzanas']
}

let menuLunesPrecio = {
  ...menuLunes,
  precio: '20€'
}

console.log('menuLunes y menuLunesPrecio', menuLunes, menuLunesPrecio);
menuLunes.platos[0] = 'Gazpacho con torreznos'

console.log('menuLunes y menuLunesPrecio', menuLunes, menuLunesPrecio);

let menuLunesPrecioClonado = structuredClone(menuLunesPrecio)

console.log('menuLunesPrecio y menuLunesclonado', menuLunesPrecio, menuLunesPrecioClonado);

menuLunesPrecioClonado.platos[0] = 'Bacalao'

console.log('menuLunesPrecio y menuLunesclonado', menuLunesPrecio, menuLunesPrecioClonado);



// Destructuración de objetos

const animalito = {
  nombre: 'Patito',
  plato: 'pato a la naranja'
}

console.log(animalito.nombre);
console.log(animalito.plato);

const { nombre } = animalito
console.log(nombre);

// Desestructuración de arrays

const bichos = ['patito', 'ratoncito', 'ornitorrinco', 'cabra', 'oso', 'cerdo']

const [primerBicho,, tercerBicho, ...otrosBichos] = bichos
console.log('primerBicho y tercerBicho: ', primerBicho, tercerBicho, otrosBichos);