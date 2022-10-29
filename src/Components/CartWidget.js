import React, {useContext} from 'react'
import { CartContext } from '../Context/CartContextProvider'


const CartWidget = () => {
  const {qty} = useContext(CartContext)
  return (
    <>
    <div className='position-relative mt-3' >

    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDT6fIQMpOvfDJUZeec3fYet1OVNlXwQES9w&usqp=CAU" alt='carrito' style={{height:'5rem'}}/>
    {qty !== 0 ? <span className='position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger'>{qty}</span> : ''}
    </div>
    </>
    
  )
}

export default CartWidget