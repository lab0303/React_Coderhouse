import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import ItemListContainer from './Components/ItemListContainer';
import ItemDetailContainer from './Components/ItemDetailContainer';
import Cart from "./Components/Cart";
import Navbar from "./Components/Navbar";
import CartContextProvider from './Components/CartContextProvider';

function App() {
  return (
    
    <BrowserRouter>
    <CartContextProvider>
      <Navbar/>
      <Routes>
        <Route path='/' element ={<ItemListContainer/>}/>
        <Route path='/plataforma/:category' element ={<ItemListContainer/>}/>
        <Route path='/detalle/:id' element ={<ItemDetailContainer/>}/> 
        <Route path='/cart' element ={<Cart/>}/> 
      </Routes>
    </CartContextProvider>
    </BrowserRouter>
    
  );
}

export default App;
