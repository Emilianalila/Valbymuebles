import { Container, Row, Col, Card, CardImg } from "react-bootstrap"
import "./ItemListContainer.css"
import imgliving from "./assest/living.png"
import imgjuguetes from "./assest/juguetes.png"
import imgpatio from "./assest/patio.png"


const ItemListContainer = ({Greeting}) => {
  return (
    <Container md>
      <Row md>
        <Col md>
           <h1 className="greeting" id="titulo">{Greeting}</h1>
           <Container className="containerCategorias" >
           <button className="categorias">Living<img className="imgButton" src={imgliving} alt="Imagen boton living"/></button>
           <button className="categorias">Patio<img className="imgButton" src={imgpatio} alt="Imagen boton patio"/></button>
           <button className="categorias">Juguetes<img className="imgButton" src={imgjuguetes} alt="Imagen boton juguetes"/></button>
           </Container>
           <h5>Elige tu mueble preferido para crear un hogar feliz</h5>
        </Col>
        <Col id="imagenMedia" md>
            <h1>Categorias</h1>
            <Card>
                <CardImg id="imgTitulo" src="https://www.mindmade.es/wp-content/uploads/2020/03/cabezales-madera-de-pino-natural-2.jpg"/>    
            </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default ItemListContainer 