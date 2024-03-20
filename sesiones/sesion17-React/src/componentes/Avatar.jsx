export function Avatar({imagen, nombre}){
  return(

    <div>
      <div className="w-[50px] border-2 rounded-full flex justify-center items-center">
      <div className="w-[40px] border-2 rounded-full overflow-hidden">
              <img src={imagen} alt="avatar" />
      </div>
    
    </div>
    <p>{nombre}</p>
    </div>
    

  )
}