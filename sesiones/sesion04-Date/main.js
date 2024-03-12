// Objeto Date

// Creamos instancia de la clase Date

// Creo una fecha con el time del ordenador
const miFecha = new Date()
console.log('miFecha', miFecha);

// Inicializamos con texto
const miCumple = new Date("1973/04/13 00:00:00")
console.log('miCumple: ', miCumple);

// Inicializamos con variables 30/01/2018
const date = new Date(2018, 0, 30, 23, 30, 14, 0);
// Ojo!!! Enero es el 0
console.log('date: ', date);

const diasSemana = ['domingo','lunes', 'martes', 'miércoles','jueves','viernes', 'sabado']

console.log('Leer el día de la semana: ', diasSemana[date.getDay()]);
console.log('Leer el día del mes: ', date.getDate());
console.log('Leer el mes: ', date.getMonth());
console.log('Leer el año: ', date.getFullYear());

// Sacar los milisegundos desde 1970
console.log(' Milisegundos desde mi cumple: ', miCumple.getTime())

// Ejemplo: Calcula los años que tengo en este momento





