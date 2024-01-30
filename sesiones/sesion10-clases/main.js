

// Clases
console.log('Clases');

// Creamos clase bicho (será como una plantilla de objetos)
class Bicho { // Los nombres de la clase mejor con mayuscula
  // Propiedades
  apodo = 'Escarabajo'
  peso = 200

  // Métodos
  saludar = () => {
    alert('Hola, soy un ' + this.apodo)
  }
}
// Creamos una instancia de la clase bicho

const unBicho = new Bicho()
// Mostramos el valor de su propiedad peso
console.log('peso: ', unBicho.peso);

// Llamamos a su método saludar
//unBicho.saludar()

// Ahora vamos a crear una clase para que inicialice sus propiedades con los parámetros que recibe al ser instanciado el objeto.

class Vehiculo {
  constructor(marca, modelo) {
    // Propiedades 
    this.marca = marca
    this.modelo = modelo
  }
  // Métodos
  informar = () => {
    alert('Marca y modelo: ' + this.marca + ' ' + this.modelo)
  }
}

// Creamos instancia y le pasamos parámetros  para inicializar propiedades
const miCoche = new Vehiculo('ford', 'fiesta')

// Llamamos a su método informar
//miCoche.informar()

// Mostramos por consola la propiedad marca
console.log('miCoche.marca ', miCoche.marca);

// HERENCIA
// Extendemos nuestra clase a una nueva clase que herede propiedades y métidos y añadimos nueva propieadad

class Coche extends Vehiculo {
  constructor(marca, modelo, matricula){
    super(marca, modelo)
    this.matricula = matricula
  }
}

const miCarro = new Coche('Renault', 'Laguna', '2356jvm')
console.log(miCarro.marca, miCarro.matricula);

// propiedades computadas y propiedades privadas

class Persona{
  constructor(nombre){
    this.nombre = nombre
  }
  fechaNacimiento
  get edad(){
    const hoy = new Date()
    const milisHoy  = hoy.getTime()
    const fechaN = new Date(this.fechaNacimiento)
    const milisFN = fechaN.getTime()
    let edadActual = (((((milisHoy-milisFN)/1000)/60)/60)/24)/365
    edadActual = Math.floor(edadActual)
    return edadActual
  }

  setFechaNacimiento = (fecha)=>{
    if(new Date (fecha) != 'Invalid Date') this.fechaNacimiento = new Date(fecha)
    else alert('El formato de la fecha no es correcto')
  }
}


const yo = new Persona('Carlos')

yo.setFechaNacimiento('1973-04-13')
console.log('Edad computada', yo.edad);




// Métodos estáticos: Sirven para poder usar la clase directamente sin tener que instanciar objetos. Van bien para orms y similar

const usuariosBD = [
  {
    id: 123,
    nombre: 'Pepe'
  },
  {
    id: 124,
    nombre: 'Eva'
  }
]

class Usuarios{ 
  static getNombreById = (id)=>{
    const usuarioEncontrado  = usuariosBD.find((usuario)=>usuario.id == id)
    if(usuarioEncontrado) return usuarioEncontrado
    else return 'No existe ese usuario'
  }
}

// Usamos directmente la clase para encontrar el usuario de nuestra base de datos
const user = Usuarios.getNombreById(123)
console.log(user);

