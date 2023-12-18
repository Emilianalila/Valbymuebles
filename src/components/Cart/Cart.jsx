import "./Cart.css";
import { CartContext } from "../../context/CartContext";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartItem } from "../CartItem/CartItem";

const Cart = () => {
  const { cart, vaciarCarrito, total, cantidadTotal } = useContext(CartContext);

  if (cantidadTotal === 0) {
    return (
      <>
        <h2>No hay items en el carrito</h2>
        <Link to="/" className="Option">
          Productos
        </Link>
      </>
    );
  }

  return (
    <div>
      <div className="eliminar">
        {cart.map((producto) => (
          <CartItem key={producto.id} {...producto} />
        ))}
      </div>
      <div className="medio">
        <h3>Total: ${total}</h3>
        <h3>Cantidad total:{cantidadTotal}</h3>
        <button onClick={() => vaciarCarrito()} className="Button">
          Vaciar carrito
        </button>
      </div>

      <hr />
      <div>
        <Link to="/checkout" className="finalizar">
          Finalizar Compra
        </Link>
      </div>
    </div>
  );
};

export default Cart;
