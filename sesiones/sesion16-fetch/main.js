console.log('Hola Fetch');

// Peticion fetch a pokeapi

fetch('https://pokeapi.co/api/v2/pokemon')
.then(resp => resp.json())
.then(respJSON => {
  console.log('respuesta pokemons: ', respJSON);
  console.log('Nombre primer pokemon:', respJSON.results[0].name, respJSON.results[0].url);

  fetch(respJSON.results[0].url)
  .then(resp => resp.json())
  .then(resp2JSON =>{
    console.log('pokemon obtenido: ',resp2JSON);
    console.log('imagen', resp2JSON.sprites.front_default);
  })
})

function inyectarPokemon(url){
// Codigo para añadir elementos a un div
const divPokemons = document.querySelector('#pokemons');
// Creamos elemento nuevo
const imagen = document.createElement("div");
// Le inyectamos la imagen
imagen.innerHTML = `<img src="${url}"></img>`

// Añadimos en el div divPokemons el div creado con la imagen
divPokemons.appendChild(imagen)
}

const url = 'https:/pokapi.co/api/v2/pokemon'



fetch(url)
  .then(resp => resp.json())
  .then(respJson => {
    console.log(respJson);
  })
  .finally(() => {
    console.log('chin pun');
  })
  .catch(() => {
    console.log('errooooooorrrr');
  })


