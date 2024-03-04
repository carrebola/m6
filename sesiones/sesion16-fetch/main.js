console.log('Hola Fetch');

// Peticion fetch a pokeapi

fetch('https://pokeapi.co/api/v2/pokemon')
.then(resp => resp.json())
.then(respJSON => {
  console.log('respuesta pokemons: ', respJSON);
  console.log('Nombre primer pokemon:', respJSON.results[0].name, respJSON.results[0].url);
  // Peticion fech anidada 
  fetch(respJSON.results[0].url)
  .then(resp => resp.json())
  .then(resp2JSON =>{
    console.log('pokemon obtenido: ',resp2JSON);
    console.log('imagen', resp2JSON.sprites.front_default);
    inyectarPokemon(resp2JSON.sprites.front_default)
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

// Ejemplo con finally y catch para gestión de errores
const url = 'https:/pokeapi.co/api/v2/pokemon/1'

fetch(url)
  .then(resp => resp.json())
  .then(respJson => {// Cuando se resuelve la petición de manera correcta
    console.log('respuesta nombre:',respJson.name);
  })
  .finally(() => { // Cuando se ha finalizado la promesa, resuelta o no
    console.log('chin pun');
  })
  .catch(() => {// Cuando se produce un error en la petición
    console.log('errooooooorrrr');
  })


//Ejemplo con async/await
const urlPoke = 'https:/pokeapi.co/api/v2/pokemon/1'

async function leePokemon(){
  try { // Intenta
    const miPokemon = await fetch(urlPoke)
    // Parseamos resultado
    const miPokemonJson = await miPokemon.json()
    console.log('Resultado de la petición:' ,miPokemon);
    
    // gestionando error de petición
    if(miPokemon.status !=200) throw('Error en la petición')
    console.log('Este es el pokemon con async/await: ', miPokemonJson.name)

  } catch (error) { // Si se produce un error
    console.log('Se ha producido un error en la petición', error);
  }
}
// Llamamos a la función asincrona
leePokemon()


// Promesas
async function leerPokemonConPromise(){
  const ahora = new Date().getTime()
  console.log('time:',ahora);
  const arrayPokemons=[]
  // llenamos array con peticiones asyncronas
  for(let i=0;i<5;i++){
    arrayPokemons[i] = fetch(`https:/pokeapi.co/api/v2/pokemon/${i+1}`).then(resp=>resp.json())
  }
  console.log('Array de pokemons: ',arrayPokemons); //=> array de promesas
  
  // Guardamos en respuestas las promesas una vez se han resuelto TODAS
  const respuestas  =  await Promise.all(arrayPokemons)
  console.log('arrayPokemons al finalizar todas las peticiones: ', respuestas[0]);
  console.log('time2:',  new Date().getTime() - ahora , 'milisegundos');
}

leerPokemonConPromise()


