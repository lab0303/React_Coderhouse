import React from 'react'
import Item from "./Item"

const ItemList = ({juegos}) => {
  return (
    <>
   { juegos.length ? juegos.map((juego)=>(
        
       <Item 
        key={juego.id} 
        nombre={juego.nombre}
        plataforma={juego.plataforma}
        precio={juego.precio}
        img={juego.img}
        id = {juego.id}
        />
       )) : <h3>Cargando...</h3>}
    </>
  )
}

export default ItemList