import { Container, Row, Col} from "react-bootstrap";
import Products from "../Products/Products"
import "./ContainerProducts.css"

const ContainerProducts = () => {
    const props = {
        nombre: "Vestidor",
        precio: `$`+ 300
    };
  return (
    <Container  id="contenedorProductos" >
       <Products nombre= "Mesa" precio= {`$`+ 100}/>
       <Products nombre= "Silla" precio= {`$`+ 200}/>
       <Products nombre= "Organizador" precio= {`$`+ 300}/>
       <Products {...props} />

    </Container>
  )
}

export default ContainerProducts

