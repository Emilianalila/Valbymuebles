import { useContext } from "react";
import trolley from "./assets/trolley.png"
import "./CardWidget.css";
import { Link } from "react-router-dom";
import { CartContext } from "../../Context/CartContext";

const CardWidget = () => {
    const {cantidadTotal} = useContext(CartContext);
    

  return (
    <Link to= "/cart" className="CartWidget" >
      <img className ="imgCarrito" src= {trolley} alt="trolley" />
      {
        cantidadTotal > 0 && <span> {cantidadTotal} </span>
      }
    </Link>
  )
}

export default CardWidget
