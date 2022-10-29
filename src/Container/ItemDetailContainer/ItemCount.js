import React, { useState } from 'react'
import {Button} from 'react-bootstrap'
const ItemCount = ({stock, initial, agregarCarrito, juego}) => {
    
    const [contador, setContador] = useState(initial);
    

    function sumar(){
        setContador(contador + 1);
    }

    function restar(){
        setContador(contador - 1);
    }

  return (
    <>      
    <div className='d-flex justify-content-evenly'>
        <Button disabled={(contador === stock || stock === 0)? true:false} onClick={sumar}>Aumentar</Button>
        <h2>{contador}</h2>  
        <Button variant="danger" disabled={(contador === initial || stock === 0)? true:false} onClick={restar}>Disminuir</Button>
        <Button variant="success" disabled={(stock === 0)? true:false} onClick={()=>agregarCarrito(contador)}>Agregar al carrito</Button>
    </div>
    </>
  )
}

export default ItemCount