import trolley from "./assets/trolley.png"
import "./CardWidget.css";
const CardWidget = () => {
  return (
    <div>
      <img className ="imgCarrito" src= {trolley} alt="trolley" />
      <strong> 0 </strong>
    </div>
  )
}

export default CardWidget
