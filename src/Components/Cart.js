import React,{useContext, useState} from 'react'
import { CartContext } from '../Context/CartContextProvider'
import { Link } from 'react-router-dom'
import {db} from '../firebase/firebase'
import {collection, addDoc, serverTimestamp} from 'firebase/firestore'
import Swal from 'sweetalert2'
import Formulario from './Formulario'
import {Table, Button} from 'react-bootstrap'

const Cart = () => {
  const {cart, total, removeItem, clear} = useContext(CartContext);
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [email, setEmail] = useState("");
  
  const usuario = {
    nombre,
    apellido,
    email,
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
    
    {cart.length !==0 ? (cart.map((juego)=>(
      <Table striped bordered key={juego.item.id}>
      <thead>
        <tr>
          <th></th>
          <th>Nombre del juego</th>
          <th>Precio Unitario</th>
          <th>Cantidad</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr >
          <td className='align-middle'><img src={juego.item.img} style={{width:'8rem', height:'8rem'}} alt='juego'/></td>
          <td className='align-middle'><h4>{juego.item.nombre}</h4></td>
          <td className='align-middle'><h4>${juego.item.precio}</h4></td>
          <td className='align-middle'><h4>{juego.quantity}</h4></td>
          <td className='align-middle'><Button variant='danger' onClick={()=>removeItem(juego)}>Borrar juego</Button></td>
        </tr>
      </tbody>
    </Table>
))) : <h3>No hay juegos en el carrito. Ve la lista completa <Link to = "/">aca</Link></h3>}
    
    
    {cart.length !== 0 && 
    <>
      <h2 className='d-flex justify-content-end'>Precio total: ${total}</h2>
      <Formulario setNombre={setNombre} setApellido={setApellido} setEmail={setEmail} />
      <br/>
      <Button variant='danger' onClick={clear}>Borrar todo</Button>
      <Button onClick={finalizarCompra}>Finalizar la compra</Button>
    </>}

    
    </>
  )
}

export default Cart