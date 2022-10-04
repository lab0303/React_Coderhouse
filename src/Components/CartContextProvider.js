import React, { createContext , useState} from 'react'

export const CartContext = createContext();

const CartContextProvider = ({children}) => {
  const [cart, setCart] = useState([]);

  const addItem = (item , quantity) =>{
    if(!isInCart(item)){
      setCart([...cart, {item, quantity}]);
      console.log('agregado');
    }else{
      console.log('repetido');
    }
  }

  const isInCart = (item)=>{
    return cart.some((product)=> product.item.id === item.id); 
  }

  const removeItem = (itemId) =>{
    const remove = cart.filter((product)=>product.item.id !== itemId);
    setCart([...remove]);
  }

  const clear = () =>{
    setCart([]);
  }
  return (
    <CartContext.Provider value={{cart, addItem, removeItem, clear}}>
      {children}
    </CartContext.Provider>
  )
}

export default CartContextProvider