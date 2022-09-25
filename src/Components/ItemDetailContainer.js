import React ,{ useState, useEffect} from 'react'
import ItemDetail from './ItemDetail'
import {useParams} from 'react-router-dom'

const ItemDetailContainer = () => {
    const [juego, setJuego] = useState({});
    const {id} = useParams();
    console.log(id);
    useEffect(()=>{
        setTimeout(()=>{
            fetch("./productos.json")
            .then(res => res.json())
            .then(data => setJuego(data[0]));
            
         },2000)
    },[]);
  return (
    <>
     <ItemDetail juego={juego}/> 
    
    </>
  )
}

export default ItemDetailContainer