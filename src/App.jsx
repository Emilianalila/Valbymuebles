import  "./App.css";
import NavBar from "./components/NavBar/NavBar"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Footer from "./components/Footer/Footer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Cart from "./components/Cart/Cart";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Productos from "./components/Productos/Productos";
import Contactanos from "./components/Contactanos/Contactanos";
import { CarritoProvider } from "./Context/CartContext";
import {Checkout} from "./components/Checkout/Checkout"


function App() {
  return (
    <>
    <BrowserRouter>
    <CarritoProvider>
      <NavBar/>
      <Routes>
        <Route path="/" element= {<ItemListContainer Greeting= {"Valbymuebles"}/>} />
        <Route path="/categoria/:idCategoria" element= {<ItemListContainer Greeting= {"Valbymuebles"}/>} />
        <Route path="/Item/:idItem" element= {<ItemDetailContainer/>}/> 
        <Route path="/productos" element= {<Productos/>} />
        <Route path="/cart" element= {<Cart/>}/>
        <Route path="/contactanos" element= {<Contactanos/>} />
        <Route path="*" element= {<h2>Sitio en Construcción</h2>}/>
        <Route path="/checkout" element={ <Checkout/>} />
      </Routes>
      </CarritoProvider>
      <Footer/>
    </BrowserRouter>
    </>
  )
}
export default App;
