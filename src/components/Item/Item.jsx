import { Col, Row } from "react-bootstrap"
import "./Item.css"

const Item = ({id, nombre, precio, img, meGusta}) => {
  return (
    <div className='cardProducto'>
        <img className='imgProducto' src={img}  alt= {nombre}/>
        <Col md>
        <div className="textoProducto"> 
          <Row>
          <h5 className="texto"> {nombre} </h5>
          <p className="texto"> {precio} </p>
          <p className="texto">ID:{id} </p>
          </Row>
          <row>
          <img id='meGusta' src={meGusta}  alt= "Me gusta"/>
          <button className='btnProducto'>Ver Detalles</button>
          </row>
        </div>
        </Col>
    </div>
  )
}

export default Item