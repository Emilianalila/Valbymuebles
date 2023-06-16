import { useState, useEffect } from "react";
import "./ItemCount.css";


const ItemCount = ({ stock, inicial, funcionAgregar}) => {
  
  const [contador, setContador] = useState(inicial); 
  const [color, setColor] = useState("black"); 
  
  useEffect(() => {
    
    if (contador > 5) {
      setColor("brown");
    } else {
      setColor("black");
    }
    
  },[contador]);

  const agregarAlcarrito = () => {
    console.log(`Agregado ${contador} items`);
  };

  const incrementar = () => {
    if (contador < stock) {
      setContador(contador + 1);
    }
  };
  const decrementar = () => {
    if (contador > inicial) {
      setContador(contador - 1);
    }
  };

  return (
    <div className="contadorEstilo">
      <button className="contadorButton" onClick={decrementar}>{" "}-{" "}</button>
      <p className="contador">{contador}</p>
      <button className="contadorButton" onClick={incrementar}>{" "}+{" "}</button>
      <br></br>
      <button className="contadorButton" onClick={() => funcionAgregar(contador)} id="botton" style={{ color: color }}>
        Agregar al carrito </button>
    </div>
  );
};

export default ItemCount;
