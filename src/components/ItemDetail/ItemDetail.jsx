import { Col, Row } from "react-bootstrap";
import "./ItemDetail.css";
import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({ id, nombre, precio, img }) => {
  return (
    <div className="contenedorItem">
      <div className="contenedor">
        <Row>
          <Col>
            <img className="imgDetalle" src={img} alt={nombre} />
          </Col>
          <Col className="textoDetalles">
            <h2>{nombre}</h2>
            <h3>{precio}</h3>
            <h5>ID: {id}</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              natus, ipsum quo modi porro.
            </p>
            <>
              <ItemCount inicial={1} stock={10} />
            </>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default ItemDetail;
