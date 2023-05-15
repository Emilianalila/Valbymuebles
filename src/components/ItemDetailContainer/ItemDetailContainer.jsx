import { getProductById } from "../../asyncmock"
import {useState, useEffect} from 'react'
import "./ItemDetailContainer.css"
import ItemDetail from "../ItemDetail/ItemDetail"

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null);

    useEffect (()=> {
        getProductById(1) //producto hardcodeado, luego lo vamos a reemplazar por el Id del producto
        .then (res => setProduct(res))
    },[])


  return (
    <div>
        <ItemDetail {...product} />
    </div>
  )
}

export default ItemDetailContainer