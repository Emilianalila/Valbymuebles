import { Container, Row, Col, Card, CardImg } from "react-bootstrap"
import "./ItemListContainer.css"
import imgliving from "./assest/living.png"
import imgjuguetes from "./assest/juguetes.png"
import imgpatio from "./assest/patio.png"

import { useState, useEffect } from "react" 
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"
//nuevas funciones (con Firebase)
import {collection, getDocs, where, query} from "firebase/firestore";
import { db } from "../../services/config";


const ItemListContainer = ({Greeting}) => {
   
  const [productos, setProductos] = useState([]);

  const {idCategoria} = useParams();

  useEffect ( () => {
      const misProductos = idCategoria ? query ( collection (db, "Inventario"), where("idCat", "==", idCategoria)) : collection(db,"Inventario");

      getDocs (misProductos)
      .then(res => {
        const nuevosProductos = res.docs.map(doc => {
          const data = doc.data()
          return {id: doc.id,...data}
        })
        setProductos(nuevosProductos);
      })
      .catch (error => console.log (error))
  },[idCategoria])
   
  
  return(
  <>
    <Container md>
      <Row md>
        <Col md>
           <h1 className="greeting" id="titulo" md>{Greeting}</h1>
           <Container className="containerCategorias" >
              <Link to={"/categoria/2"}><button className="categorias">Living<img className="imgButton" src={imgliving} alt="Imagen boton living"/></button></Link>
              <Link to={"/categoria/3"}><button className="categorias">Patio<img className="imgButton" src={imgpatio} alt="Imagen boton patio"/></button></Link> 
              <Link to={"/categoria/4"}><button className="categorias">Juguetes<img className="imgButton" src={imgjuguetes} alt="Imagen boton juguetes"/></button></Link>
           </Container>
           <h5>Elige tu mueble preferido para crear un hogar feliz</h5>
        </Col>
        <Col id="imagenMedia" md>
            <h3>Categorias</h3>
            <Card>
                <CardImg id="imgTitulo" src="https://www.mindmade.es/wp-content/uploads/2020/03/cabezales-madera-de-pino-natural-2.jpg"/>    
            </Card>
        </Col>
      </Row>
    </Container>
    <ItemList productos={productos}/>
  </>
  )
}

export default ItemListContainer 