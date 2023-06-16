import "./Productos.css"
import imgliving from "../ItemListContainer/assest/living.png"
import imgjuguetes from "../ItemListContainer/assest/patio.png"
import imgpatio from "../ItemListContainer/assest/juguetes.png"
import ItemList from "../ItemList/ItemList"
import { Container } from "react-bootstrap"
import { useState, useEffect} from "react"
import { getProductos } from "../../asyncmock"
import { Link } from "react-router-dom"



const Productos = () => {
  const [productos, setproductos] = useState([]);
  
  useEffect( () => { 
    getProductos()
       .then(respuesta => setproductos(respuesta))
       .catch(error => console.log(error))
   }, [])

  return (
    <div>
      <Container className="containerCategoriasP" >
           <Link className="categoriasP">Living<img className="imgButtonP" src={imgliving} alt="Imagen boton living"/></Link>
           <ItemList productos={productos}/>
           <Link className="categoriasP">Patio<img className="imgButtonP" src={imgpatio} alt="Imagen boton patio"/></Link>
           <ItemList productos={productos}/>
           <Link className="categoriasP">Juguetes<img className="imgButtonP" src={imgjuguetes} alt="Imagen boton patio"/></Link>
           <ItemList productos={productos}/>
      </Container>
      
     
    </div>
  )
}

export default Productos
