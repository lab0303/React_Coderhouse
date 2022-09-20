import React ,{ useState, useEffect} from 'react'
import ItemDetail from './ItemDetail'

const ItemDetailContainer = () => {
    const [juego, setJuego] = useState([]);
  
    useEffect(()=>{
        setTimeout(()=>{
            fetch("./productos.json")
            .then(res => res.json())
            .then(data => setJuego(data[0]))
         },2000)
    },[]);
  return (
    <>
    <ItemDetail juego={juego}/>
    </>
  )
}

export default ItemDetailContainer