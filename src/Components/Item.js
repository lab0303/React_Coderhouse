import React from 'react'

const Item = ({nombre,plataforma,precio,img}) => {
  return (
    <div>
    <img src={img} alt={nombre}/>
    <h2>{nombre}</h2>
    <h2>{plataforma}</h2>
    <h2>{precio}</h2>
    </div>
    
  )
}

export default Item