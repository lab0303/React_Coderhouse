import React from 'react'
import {Link} from 'react-router-dom'
import { Card , Button, Row, Col } from 'react-bootstrap'

const Item = ({nombre,plataforma,precio,img, id}) => {
  
  return (
    
    <Card border="dark" style={{ width: '20rem'}} className='text-center m-3 d-inline-flex'>
      <Card.Img style={{ height: '20rem'}} variant="top" src={img} />
        <Card.Body>
          <Card.Title >{nombre}
          </Card.Title>
            <Row>
              <Col>
                <Card.Text>
                  Plataforma: {plataforma}
                </Card.Text>
              </Col> 
              <Col>
                <Card.Text>
                  Precio: ${precio}
                </Card.Text>
              </Col> 
            </Row>
              <Link to={`/detalle/${id}`}>
                <Button className='mt-3'>Detalles</Button>
              </Link>
        </Card.Body>
    </Card>
  )
}

export default Item