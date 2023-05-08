import  "./App.css";
import NavBar from "./components/NavBar/NavBar"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ContainerProducts from  "./components/ContainerProducts/ContainerProducts";
import ItemCount from "./components/ItemCount/ItemCount";
import Vista from "./components/Vista/Vista";
import Footer from "./components/Footer/Footer";


function App() {
  return (
    <>
      <NavBar/>
      <ItemListContainer Greeting= {"Valbymuebles"}/>
      <ContainerProducts/>
      <ItemCount inicial = {1} stock= {10} />
      <Vista/>
      <Footer/>
      
    </>
  )
}
export default App;
