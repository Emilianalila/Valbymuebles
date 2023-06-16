//1)import { getProductById } from "../../asyncmock"
import {useState, useEffect} from 'react'
import "./ItemDetailContainer.css"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"


//importamos las nuevas funciones (firebase)
import { getDoc, doc} from "firebase/firestore"
import { db } from '../../services/config';


const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null);
   
    
   const {idItem} = useParams(); 
   
   useEffect (() => {
    const nuevoDoc = doc (db, "Inventario", idItem);

    getDoc (nuevoDoc)
       .then (res => {
        const data= res.data();
        const nuevoProducto = {id: res.id, ...data}
        setProduct (nuevoProducto);
       })
       .catch(error => console.log(error))
   }, [idItem])
  
  return(
    <div>
         <ItemDetail {...product}/> 
         
    </div>
  )
}

export default ItemDetailContainer