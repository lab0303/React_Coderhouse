import React, {useContext} from 'react'
import { CartContext } from './CartContextProvider'


const CartWidget = () => {
  const {qty} = useContext(CartContext)
  return (
    <>
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDT6fIQMpOvfDJUZeec3fYet1OVNlXwQES9w&usqp=CAU" alt='carrito'/>
    {qty !== 0 ? <h2>{qty}</h2> : ''}
    </>
    
  )
}

export default CartWidget