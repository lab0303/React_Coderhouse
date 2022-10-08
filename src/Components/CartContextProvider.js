import React, { createContext , useState} from 'react'

export const CartContext = createContext();

const CartContextProvider = ({children}) => {
  const [cart, setCart] = useState([]);
  const [qty, setQty] = useState(0);
  const [total, setTotal] = useState(0);

  const addItem = (item , quantity) =>{
    if(!isInCart(item)){
      setCart([...cart, {item, quantity}]);
      console.log('agregado');
    }else{
      setCart(
        cart.map((product) => {
          if (product.item.id === item.id) {
            return {
              item: product.item,
              quantity: product.quantity + quantity,
            };
          }
          return item;
        })
      );
      console.log('repetido');
      
    }
    setQty(qty + quantity);
    setTotal(total + ( quantity * item.precio ));
  }

  const isInCart = (item)=>{
    return cart.some((product)=> product.item.id === item.id); 
  }

  const removeItem = (itemId) =>{
    const remove = cart.filter((product)=>product.item.id !== itemId.item.id);
    setCart([...remove]);
    console.log(itemId);
    setQty(qty - itemId.quantity);
    setTotal(total - ( itemId.quantity * itemId.item.precio ));
  }

  const clear = () =>{
    setCart([]);
    setQty(0);
    setTotal(0);
  }
 
  
  return (
    <CartContext.Provider value={{cart, qty, total, addItem, removeItem, clear}}>
      {children}
    </CartContext.Provider>
  )
}

export default CartContextProvider