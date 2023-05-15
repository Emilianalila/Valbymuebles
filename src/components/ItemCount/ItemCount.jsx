import { useState, useEffect } from 'react'
import "./ItemCount.css"


const ItemCount = ({stock, inicial}) => {
    //hooks
    const [contador, setContador] = useState(inicial);// props (entre parentesis)
    const [color, setColor] = useState("black"); //string "entreComilas"
    // efecto secundario, cambiar el color a mi boton (agregar al carrito)
    useEffect (() => {
        console.log ("se ejecuto el useeffect!!");
        if (contador > 5){
          setColor ("brown");
        }else {
          setColor("black");
        }
        /* if (contador === 5){
          document.getElementById("botton").style.color = "red";
        } no podemos utilizar document. para manipular el Don, de eso se encargan los estados, REACT*/
    },[contador])
    
    
    const agregarAlcarrito = () => {
      console.log(`Agregado ${contador} items`);
    }
    
    const incrementar = () => {
        if (contador < stock) {  
        setContador (contador + 1);
      }
    }
    const decrementar = () =>{
        if (contador > inicial) { 
        setContador (contador - 1);
      }
    }
  
    return (
    
    <div className= "contadorEstilo">
        <button className="contadorButton" onClick={decrementar}> - </button>
        <p className="contador" >{contador}</p>
        <button className="contadorButton" onClick={incrementar}> + </button>
        <br></br>
        <button className="contadorButton" onClick={agregarAlcarrito} id= "botton"style={{color:color}} >Agregar al carrito</button>
    </div>
  );
}

export default ItemCount
