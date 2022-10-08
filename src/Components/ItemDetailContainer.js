import React ,{ useState, useEffect} from 'react'
import ItemDetail from './ItemDetail'
import {useParams} from 'react-router-dom'

const ItemDetailContainer = () => {
    const [juego, setJuego] = useState({});
    const {id} = useParams();
    useEffect(()=>{
        setTimeout(()=>{
            fetch("../productos.json")
            .then(res => res.json())
            .then(data => {
              const item = data.filter(item => item.id === parseInt(id));
              setJuego(item[0])
            })     
         },2000)
    },[id]);
  return (
    <>
     <ItemDetail juego={juego}/> 
    </>
  )
}

export default ItemDetailContainer