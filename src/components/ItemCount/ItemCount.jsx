import React from 'react'
import { useState } from 'react'
import "./ItemCount.css"
import { Button } from 'react-bootstrap';

const ItemCount = () => {
    //aca se trabaja los hooks
    const [contador, setContador] = useState (1);
    
    let maximoStock = 10;
    const incrementar = () => {
        if (contador < maximoStock)
        setContador (contador + 1);
    }
    const decrementar = () =>{
        if (contador > 1)
        setContador (contador - 1);
    }
  return (
    <div className= "contadorEstilo">
        <button className="contadorButton" onClick={decrementar}> - </button>
        <p>{contador}</p>
        <button className="contadorButton" onClick={incrementar}> + </button>
    </div>
  )
}

export default ItemCount
