import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import ItemListContainer from './Components/ItemListContainer';
import ItemDetailContainer from './Components/ItemDetailContainer';
import Navbar from "./Components/Navbar";

function App() {
  return (
    
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element ={<ItemListContainer/>}/>
        <Route path='/:categoria' element ={<ItemListContainer/>}/>
        <Route path='/detalle/:id' element ={<ItemDetailContainer/>}/> 
      </Routes>
      <ItemDetailContainer/>
    </BrowserRouter>
    
  );
}

export default App;
