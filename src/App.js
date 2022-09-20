import './App.css';
import ItemListContainer from './Components/ItemListContainer';
import ItemDetailContainer from './Components/ItemDetailContainer';
import Navbar from "./Components/Navbar";

function App() {
  return (
    <>
    <Navbar/>
    <ItemListContainer/>
    <ItemDetailContainer/>
    </>
  );
}

export default App;
