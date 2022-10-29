import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import ItemListContainer from './Container/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './Container/ItemDetailContainer/ItemDetailContainer';
import Cart from "./Components/Cart";
import Navbar from "./Components/Navbar";
import NotFound from "./Components/NotFound"
import CartContextProvider from './Context/CartContextProvider';
import {Container} from 'react-bootstrap'

function App() {
  return (
    
    <BrowserRouter>
    <Container>
      <CartContextProvider>
      <Navbar/>
      <Routes>
        <Route path='/' element ={<ItemListContainer/>}/>
        <Route path='/plataforma/:category' element ={<ItemListContainer/>}/>
        <Route path='/detalle/:id' element ={<ItemDetailContainer/>}/> 
        <Route path='/cart' element ={<Cart/>}/> 
        <Route path='*' element ={<NotFound/>}/>
      </Routes>
      </CartContextProvider>
    </Container>
    </BrowserRouter>
    
  );
}

export default App;
