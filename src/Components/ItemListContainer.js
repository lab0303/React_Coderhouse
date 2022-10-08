import React, { useEffect, useState } from 'react'
import ItemList from './ItemList'
import {useParams} from 'react-router-dom'
import {db} from '../firebase/firebase'
import {getDocs, collection, query, where} from 'firebase/firestore'

const ItemListContainer = () => {

  const [juegos, setJuegos] = useState([]);
  const {category} = useParams();
  useEffect(()=>{
    const productsCollection = collection(db, "products");
    const q = query(productsCollection, where("plataforma","==",`${category}`));

    getDocs(!category ? productsCollection: q)
    .then(data =>{
      const lista = data.docs.map(item =>{
        return{
          ...item.data(),
          id: item.id, 
        };
      });
      console.log(lista);
      setJuegos(lista);
    })
    
  },[category]);
  
  return (
    <>
    <ItemList  juegos={juegos}/>
    </>
    
  )
}

export default ItemListContainer