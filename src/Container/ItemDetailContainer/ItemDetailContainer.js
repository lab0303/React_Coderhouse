import React ,{ useState, useEffect} from 'react'
import ItemDetail from './ItemDetail'
import {useParams} from 'react-router-dom'
import {db} from '../../firebase/firebase'
import {collection, getDoc, doc} from 'firebase/firestore'

const ItemDetailContainer = () => {
    const [juego, setJuego] = useState({});
    const {id} = useParams();
    useEffect(()=>{     
         const productCollection = collection(db,"products");
         const refDoc = doc(productCollection,id);
         getDoc(refDoc)
         .then(result =>{
          setJuego({
            id: result.id,
            ...result.data(),
          })
         })
    },[id]);
  return (
    <>
     <ItemDetail juego={juego}/> 
    </>
  )
}

export default ItemDetailContainer