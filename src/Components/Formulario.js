import React from 'react'

const Formulario = ({setNombre, setEmail, setApellido}) => {
   
    const userName = (e)=>{
        setNombre(e.target.value);
      }
      const userLastname = (e)=>{
        setApellido(e.target.value);
      }
      const userEmail = (e)=>{
        setEmail(e.target.value);
      }
  return (
    <div>
    <form>
    <input type="text" placeholder= "Nombre" onChange={userName} />
    <input type="text" placeholder= "Apellido" onChange={userLastname}/>
    <input type="email" placeholder= "Email" onChange={userEmail} />
    </form>
    </div>
  )
}

export default Formulario