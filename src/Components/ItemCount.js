import React, { useState } from 'react'

const ItemCount = ({stock, initial}) => {
    
    const [contador, setContador] = useState(initial);


    function sumar(){
        setContador(contador + 1);
    }

    function restar(){
        setContador(contador - 1);
    }

    function agregarCarrito(){
        alert(`Agregaste ${contador} elemento(s) al carrito`)
    }
  return (
    <>
    <h2>
       {contador}
    </h2>        
    <div>
        <button disabled={(contador == stock || stock == 0)? true:false} onClick={sumar}>Aumentar</button>
        <button disabled={(contador == initial || stock == 0)? true:false} onClick={restar}>Disminuir</button>
        <button disabled={(stock == 0)? true:false} onClick={agregarCarrito}>Agregar al carrito</button>
    </div>
    </>
  )
}

export default ItemCount