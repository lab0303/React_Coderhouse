import React from 'react'
import {Card, Form} from 'react-bootstrap'

const Formulario = ({setNombre, setEmail, setApellido}) => {
   
    const userName = (e)=>{
        setNombre(e.target.value);
      }
      const userLastname = (e)=>{
        setApellido(e.target.value);
      }
      const userEmail = (e)=>{
        setEmail(e.target.value);
      }
  return (
    <div className='mt-5'>
      <Card style={{ width: '40rem' }}>
        <Card.Body>
          <Card.Title>Formulario de compra</Card.Title>
          <Form.Label>Nombre</Form.Label>
          <Form.Control size="lg" type="text"  onChange={userName}/>
          <br />
          <Form.Label>Apellido</Form.Label>
          <Form.Control size="lg" type="text" onChange={userLastname}/>
          <br />
          <Form.Label>Email address</Form.Label>
          <Form.Control size="lg" type="text" onChange={userEmail}/>
        </Card.Body>
      </Card>
    </div>
  )
}

export default Formulario