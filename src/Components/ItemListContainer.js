import React, { useEffect, useState } from 'react'
import ItemCount from './ItemCount'
import ItemList from './ItemList'

const ItemListContainer = () => {

  const [juegos, setJuegos] = useState([]);
  
  useEffect(()=>{
    setTimeout(()=>{
      fetch("./productos.json")
      .then(res => res.json())
      .then(data => setJuegos(data))
    },2000)
  },[]);
  
  return (
    <>
    <ItemCount stock={5} initial={1}/>
    <ItemList  juegos={juegos}/>
    </>
    
  )
}

export default ItemListContainer