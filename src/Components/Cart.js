import React,{useContext} from 'react'
import { CartContext } from './CartContextProvider'

const Cart = () => {
  const {cart, removeItem, clear} = useContext(CartContext)
  return (
    <>
    {cart.length ? (cart.map((juego)=>(
      <div key={juego.item.id}>
      <h3 >{juego.item.nombre}</h3>  
      <p>Cantidad: {juego.quantity} </p>
      <button onClick={()=>removeItem(juego.item.id)}>Borrar juego</button>
      </div>
))) : <h3>No hay juegos en el carrito</h3>}

    <button onClick={clear}>Borrar todo</button>
    </>
  )
}

export default Cart