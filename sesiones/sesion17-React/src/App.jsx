import { Avatar } from "./componentes/Avatar"
import { Titulo } from "./componentes/Titulo"
import { Home } from "./vistas/Home"
import avatar1 from "/avatar.svg"


function App() {

  const avatares = [
    {
      imagen: avatar1,
      nombre: 'Carliños'
    },
    {
      imagen: '/avatar2.svg',
      nombre: 'Pepillo'
    }
  ]
  return (
    <div id="app" className="p-5">
      <Titulo />
      {
        avatares.map((item) => {
          return (
            <Avatar nombre={item.nombre} imagen={item.imagen} />
          )
        })
        // avatares.map(item=>(
        //     <Avatar nombre={item.nombre} imagen={item.imagen} />
        // ))
        /* <Avatar imagen={avatares[0].imagen} nombre={avatares[0].nombre}></Avatar>
        <Avatar imagen={avatares[1].imagen} nombre={avatares[1].nombre}></Avatar> */
      }
      <Home />
    </div>
  )
}

export default App
