import React,{useContext} from 'react'
import { CartContext } from './CartContextProvider'
import { Link } from 'react-router-dom'
import {db} from '../firebase/firebase'
import {collection, addDoc, serverTimestamp} from 'firebase/firestore'
import Swal from 'sweetalert2'

const Cart = () => {
  const {cart, total, removeItem, clear} = useContext(CartContext)
  const usuario = {
    nombre: 'Luis',
    apellido: 'Beltran',
    email:'lab@hotmail.com',
  }

  const finalizarCompra = ()=>{
    const ventaCollection = collection(db, 'ventas');
    addDoc(ventaCollection,{
      usuario,
      juegos: cart,
      date: serverTimestamp(),
      total,
    })
    .then((res)=>{
      clear();
      Swal.fire(`Gracias por su compra, su numero de id es: ${res.id}`);
    })
  }
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
    
    
    {cart.length !== 0 && 
    <>
    <h2>Precio total: ${total}</h2>
    <button onClick={clear}>Borrar todo</button>
    <button onClick={finalizarCompra}>Finalizar la compra</button>
    </>}

    
    </>
  )
}

export default Cart