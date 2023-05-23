import { Container, Row, Col, Card, CardImg } from "react-bootstrap"
import "./ItemListContainer.css"
import imgliving from "./assest/living.png"
import imgjuguetes from "./assest/juguetes.png"
import imgpatio from "./assest/patio.png"

import { useState, useEffect } from "react" // useEffect lo nesecito para la simulacion de coneccion o "conectarme" con la base de datos o en este caso con mi (async mock)
import ItemList from "../ItemList/ItemList"
import { getProductos } from "../../asyncmock"
import { getProductoCategoria } from "../../asyncmock" 
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"


const ItemListContainer = ({Greeting}) => {
   
  const [productos, setproductos] = useState([]);

  const {idCategoria} = useParams();
   
  useEffect( () => { //efecto secundario "la carga de productos"
    const funcionProductos = idCategoria ? getProductoCategoria : getProductos;
    funcionProductos(idCategoria)
       .then(respuesta => setproductos(respuesta))
       .catch(error => console.log(error))
   }, [idCategoria])

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
    <h4>Reseñas</h4>
    </>
  )
}

export default ItemListContainer 