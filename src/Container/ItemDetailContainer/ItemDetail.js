import React , { useContext, useState} from 'react'
import { Link } from 'react-router-dom'
import ItemCount from './ItemCount'
import { CartContext } from '../../Context/CartContextProvider'
import {Row, Col, Button} from 'react-bootstrap'


const ItemDetail = ({juego}) => {
  const {addItem} = useContext(CartContext)
  const [estaClick , setEstaClick] = useState(false)
  const agregarCarrito = (count) =>{
    setEstaClick(true);
    addItem(juego,count);
  }
 
  return (
    <>
    <Row>
      <Col md={4} >
      <img src={juego.img} alt="juego"/>
      </Col>
      <Col>
      <Row><h1>{juego.nombre}</h1></Row>
      <Row><h2>${juego.precio}</h2></Row>
      <Row><p>{juego.descripcion}</p></Row>
      <Row>{estaClick ? <Link to= "/cart"><Button>Terminar compra</Button></Link> :
        <ItemCount stock={5} initial={1} agregarCarrito = {agregarCarrito} juego= {juego}/>}
      </Row>
      </Col>
    </Row>
    </>
  )
}

export default ItemDetail