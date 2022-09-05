import './App.css';
import ItemListContainer from './Components/ItemListContainer';
import Navbar from "./Components/Navbar";

function App() {
  return (
    <>
    <Navbar/>
    <ItemListContainer greeting="Bienvenidos a la tienda"/>
    </>
  );
}

export default App;
