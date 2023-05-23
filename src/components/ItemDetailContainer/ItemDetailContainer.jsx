import { getProductById } from "../../asyncmock"
import {useState, useEffect} from 'react'
import "./ItemDetailContainer.css"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"


const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null);
   /*  const getId= useParams().getId;  */// useParams nos devuelve un "string" si mi id es un numero lo paso a Number 
    
   const {getId} = useParams(); // getId es un nombre q elegi yo, en app para capturar el id de mi componente itemdetailcontainer
    
   useEffect (()=> {
        getProductById((getId)) //producto hardcodeado,lo reemplazamos por el id del producto que capturado anteriormente con useParams
        .then (res => { 
            setProduct(res);
        })
        .catch(error => {
            console.error(error)
        })
    },[getId])
 
  return(
    <div>
         <ItemDetail {...product}/> 
         
    </div>
  )
}

export default ItemDetailContainer