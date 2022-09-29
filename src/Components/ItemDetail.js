import React , { useState} from 'react'
import { Link } from 'react-router-dom'
import ItemCount from './ItemCount'

const ItemDetail = ({juego}) => {
  const [estaClick , setEstaClick] = useState(false)
  const agregarCarrito = () =>{
    setEstaClick(true);
  }
 
  return (
    <>
    <h2 style={{color: "red"}}>Esto es desde el ItemDetail</h2>
    <img src={juego.img} alt="juego" />
    <h1>{juego.nombre}</h1>
    <h2>${juego.precio}</h2>
    <p>{juego.descripcion}</p>
    {estaClick ? <Link to= "/cart"><button>Terminar compra</button></Link> 
    :
    <ItemCount stock={5} initial={1} agregarCarrito = {agregarCarrito}/>}
    </>
  )
}

export default ItemDetail