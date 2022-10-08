import React,{useContext} from 'react'
import { CartContext } from './CartContextProvider'
import { Link } from 'react-router-dom'

const Cart = () => {

  const {cart, total, removeItem, clear} = useContext(CartContext)
  return (
    <>
    {cart.length ? (cart.map((juego)=>(
      <div key={juego.item.id}>
      <h3 >{juego.item.nombre}</h3> 
      <p>Precio: ${juego.item.precio}</p> 
      <p>Cantidad: {juego.quantity} </p>
      <button onClick={()=>removeItem(juego)}>Borrar juego</button>
      </div>
))) : <h3>No hay juegos en el carrito. Ve la lista <Link to = "/">aca</Link></h3>}

    <h2>Precio total: ${total}</h2>
    <button onClick={clear}>Borrar todo</button>
    </>
  )
}

export default Cart