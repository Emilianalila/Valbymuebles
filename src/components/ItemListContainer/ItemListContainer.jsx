import { Container, Row, Col, Card, CardImg } from "react-bootstrap"
import "./ItemListContainer.css"
import imgliving from "./assest/living.png"
import imgjuguetes from "./assest/juguetes.png"
import imgpatio from "./assest/patio.png"

import { useState, useEffect } from "react" // useEffect lo nesecito para la simulacion de coneccion o "conectarme" con la base de datos o en este caso con mi (async mock)
import ItemList from "../ItemList/ItemList"
import { getProductos } from "../../asyncmock"


const ItemListContainer = ({Greeting}) => {
   
  const [productos, setproductos] = useState([]);
   
   useEffect( () => { //efecto secundario "la carga de productos"
    getProductos()
       .then(respuesta => setproductos(respuesta))
       .catch(error => console.log(error))
   }, [])

  return(
    <>
    <Container md>
      <Row md>
        <Col md>
           <h1 className="greeting" id="titulo" md>{Greeting}</h1>
           <Container className="containerCategorias" >
           <button className="categorias">Living<img className="imgButton" src={imgliving} alt="Imagen boton living"/></button>
           <button className="categorias">Patio<img className="imgButton" src={imgpatio} alt="Imagen boton patio"/></button>
           <button className="categorias">Juguetes<img className="imgButton" src={imgjuguetes} alt="Imagen boton juguetes"/></button>
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