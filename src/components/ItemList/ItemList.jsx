import "./ItemList.css"
import Item from '../Item/Item'


const ItemList = ({productos}) => {//recibo productos por props, desde mi async mock
  return (
    <div className="contenedorProductos">
        {productos.map(prod => <Item key= {prod.id} {...prod}/> )}
    </div>
  )
}

export default ItemList