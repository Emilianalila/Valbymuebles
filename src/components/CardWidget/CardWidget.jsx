import trolley from "./assets/trolley.png"
import "./CardWidget.css";
const CardWidget = () => {
  return (
    <div>
      <img className ="imgCarrito" src= {trolley} alt="trolley" />
      <strong> 1 </strong>
    </div>
  )
}

export default CardWidget
