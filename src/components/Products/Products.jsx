import "./Products.css"
import organizador from "./assets/mueble-organizador1.png"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function Products({nombre, precio}) {
  return (
    <Card id="productos" style={{ width: '13rem' }}>
      <Card.Img variant="top" src= {organizador} />
      <Card.Body className="card-body">
        <Card.Title> {nombre} </Card.Title>
        <Card.Text>
        <p> {precio} </p>
        </Card.Text>
        <Button id ="estiloButton"> Agregar al carrito </Button>
      </Card.Body>
    </Card>
  );
}

export default Products;