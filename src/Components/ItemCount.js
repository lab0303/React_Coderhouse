import React, { useState } from 'react'

const ItemCount = ({stock, initial, agregarCarrito}) => {
    
    const [contador, setContador] = useState(initial);


    function sumar(){
        setContador(contador + 1);
    }

    function restar(){
        setContador(contador - 1);
    }

  return (
    <>
    <h2>
       {contador}
    </h2>        
    <div>
        <button disabled={(contador === stock || stock === 0)? true:false} onClick={sumar}>Aumentar</button>
        <button disabled={(contador === initial || stock === 0)? true:false} onClick={restar}>Disminuir</button>
        <button disabled={(stock === 0)? true:false} onClick={()=>agregarCarrito(contador)}>Agregar al carrito</button>
    </div>
    </>
  )
}

export default ItemCount