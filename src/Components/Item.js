import React from 'react'
import {Link} from 'react-router-dom'

const Item = ({nombre,plataforma,precio,img, id}) => {
  
  return (
    <div>
    <img src={img} alt={nombre}/>
    <h2>{nombre}</h2>
    <h2>{plataforma}</h2>
    <h2>{precio}</h2>
    <Link to={`/detalle/${id}`}>
    Detalles
    </Link>  
    
    </div>
    
  )
}

export default Item