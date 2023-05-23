import  "./App.css";
import NavBar from "./components/NavBar/NavBar"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Footer from "./components/Footer/Footer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Productos from "./components/Productos/Productos";
import Contactanos from "./components/Contactanos/Contactanos";

function App() {
  return (
    <>
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/" element= {<ItemListContainer Greeting= {"Valbymuebles"}/>} />
        <Route path="/categoria/:idCategoria" element= {<ItemListContainer Greeting= {"Valbymuebles"}/>} />
        <Route path="/Item/:getId" element= {<ItemDetailContainer/>}/> 
        <Route path="/productos" element= {<Productos/>} />
        <Route path="/contactanos" element= {<Contactanos/>} />
      </Routes>
      <Footer/>
    </BrowserRouter>
    </>
  )
}
export default App;
