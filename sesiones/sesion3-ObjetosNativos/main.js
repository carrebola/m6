// console.log('hola caracola');

// Creamos una variable aleatoria entre 3 y 8
// Math.floor(Math.random()*(numero final-numero inial-1))+numero inicial
let random = Math.floor(Math.random()*(8-2))+3
console.log(random);

// Redondeando
let numero = 1234.23
console.log(Math.round(numero));
console.log(Math.ceil(numero));
console.log(Math.floor(numero));
console.log(Math.trunc(numero));

let texto = 'Aunque es posible utilizar comillas simples y comillas dobles en los, se recomienda decantarse por uno de los dos estilos y no mezclarlos. Las empresas y equipos de desarrollo suelen tener guías para determinar cuál usar.'

console.log(texto);
console.log('número de caracteres ', texto.length);
console.log('Caracter 2 de texto: ', texto[2]);
console.log('Caracter 2 de texto: ', texto.charAt(2));
console.log('En que posición está la n : ', texto.indexOf("posible"));
console.log("hola".repeat(3));
const frase = "Hola caracola"
console.log('Recortar desde la posición 4', frase.substring(4, 7));

console.log('Numero de palabras del texto',texto.split(" ").length)
const fecha = "13/04/1973" // Mi cumpleaños
console.log(fecha.split("/"));
const meses = ['enero', 'febrero', 'marzo', 'april']
console.log('El mes es: ', meses[parseInt(fecha.split("/")[1])-1]);

console.log('Miramos si el texto contiene la palabra es ', texto.includes("es"));

console.log('Miramos si el texto contiene la palabra es ', texto.search("es"));

console.log('match, Miramos si el texto contiene la palabra es ', texto.match("es").index);

console.log('Miramos si el texto contiene la palabra es ', texto.matchAll("posible"));
const iterator = texto.matchAll("es")
for (let ocurrence of iterator) {
  console.log('coincidencias' , ocurrence.index);
}

nuevoTexto = texto.replaceAll(" es ", "<span>es</span>")
console.log(nuevoTexto);










