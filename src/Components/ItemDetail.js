import React , { useContext, useState} from 'react'
import { Link } from 'react-router-dom'
import ItemCount from './ItemCount'
import { CartContext } from './CartContextProvider'

const ItemDetail = ({juego}) => {
  const {addItem} = useContext(CartContext)
  const [estaClick , setEstaClick] = useState(false)
  const agregarCarrito = (count) =>{
    setEstaClick(true);
    addItem(juego,count);
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
    <ItemCount stock={5} initial={1} agregarCarrito = {agregarCarrito} juego= {juego}/>}
    </>
  )
}

export default ItemDetail