import React, { useEffect, useState } from 'react'
import ItemList from './ItemList'
import {useParams} from 'react-router-dom'

const ItemListContainer = () => {

  const [juegos, setJuegos] = useState([]);
  const {category} = useParams();
  
  useEffect(()=>{
    setTimeout(()=>{
      fetch("../productos.json")
      .then(res => res.json())
      .then(data => {
        if(category === undefined) {setJuegos(data)}
        else{
          const itemCategory = data.filter(item => item.plataforma === category);
          setJuegos(itemCategory);
        }
      })
    },2000)
  },[category]);
  
  return (
    <>
    <ItemList  juegos={juegos}/>
    </>
    
  )
}

export default ItemListContainer