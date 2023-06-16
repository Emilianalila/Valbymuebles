import { Col, Row } from "react-bootstrap";
import "./ItemDetail.css";
import ItemCount from "../ItemCount/ItemCount";
import { useState } from "react";
import { Link } from "react-router-dom";


// 
import {CartContext} from "../../context/CartContext"
import { useContext } from "react";

const ItemDetail = ({ id, nombre, precio, img, stock }) => {
     
    const [agregarCantidad, setAgregarCantidad] = useState (0);

    //useContext:
    const {addItem} = useContext (CartContext);
    
    // 2) Creamos una funcion manejadora de la cantidad.
    const manejadorCantidad = (cantidad) => {
        setAgregarCantidad (cantidad);
        //console.log("Productos agregados:" + cantidad)
        
        //creo un objeto con el item y la cantidad.
        const item = {id, nombre, precio};
        addItem (item, cantidad)
    }
  
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
              { 
              agregarCantidad > 0 ? (<Link to= "/cart" >Terminar Compra</Link>) : (<ItemCount inicial={1} stock={stock} funcionAgregar= {manejadorCantidad} />)
              }
              
            </>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default ItemDetail;
