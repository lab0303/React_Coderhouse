import React from 'react'

const ItemDetail = ({juego}) => {
 
  return (
    <>
    <h2 style={{color: "red"}}>Esto es desde el ItemDetail</h2>
    <img src={juego.img} alt="juego" />
    <h1>{juego.nombre}</h1>
    <h2>{juego.descripcion}</h2>
    </>
  )
}

export default ItemDetail