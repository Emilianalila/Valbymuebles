import { useState, useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import { db } from "../../services/config";
import { collection, addDoc } from "firebase/firestore";
import "./Checkout.css";

export const Checkout = () => {
  const { cart, vaciarCarrito } = useContext(CartContext);
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [telefono, setTelefono] = useState("");
  const [email, setEmail] = useState("");
  const [emailConfirmacion, setEmailConfirmacion] = useState("");
  const [error, setError] = useState("");
  const [ordenId, setOrdenId] = useState("");

  const manejadorFormulario = (event) => {
    event.preventDefault();

    if (!nombre || !apellido || !telefono || !email || !emailConfirmacion) {
      setError("Por favor complete todos los campos");
      return;
    }

    if (email !== emailConfirmacion) {
      setError("Los campos del email no coinciden");
      return;
    }

    const orden = {
      items: cart.map((producto) => ({
        id: producto.item.id,
        nombre: producto.item.nombre,
        cantidad: producto.cantidad,
      })),
      total: cart.reduce(
        (total, producto) => total + producto.item.precio * producto.cantidad,
        0
      ),
      nombre,
      apellido,
      telefono,
      email,
    };

    addDoc(collection(db, "ordenes"), orden)
      .then((docRef) => {
        setOrdenId(docRef.id);
        vaciarCarrito();
      })
      .catch((error) => {
        console.error("Error al crear la orden.", error);
        setError("Se produjo un error al crear la orden, vuelva prontus");
      });
  };

  return (
    <div>
      <h2>Checkout</h2>
      <form onSubmit={manejadorFormulario}>
        {cart.map((producto) => (
          <div key={producto.item.id} className="descripcion">
            <p> {producto.item.nombre}: {producto.cantidad} unidades</p>
            <p> Precio: ${producto.item.precio} </p>
          </div>
        ))}
        <hr />

        <div className="form-group">
          <label htmlFor=""> Nombre </label>
          <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)}/>
        </div>

        <div className="form-group">
          <label htmlFor=""> Apellido </label>
          <input type="text" value={apellido} onChange={(e) => setApellido(e.target.value)}/>
        </div>

        <div className="form-group">
          <label htmlFor=""> Telefono </label>
          <input type="text" value={telefono} onChange={(e) => setTelefono(e.target.value)}/>
        </div>

        <div className="form-group">
          <label htmlFor=""> Email </label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
        </div>

        <div className="form-group">
          <label htmlFor=""> Email Confirmación </label>
          <input type="email" value={emailConfirmacion} onChange={(e) => setEmailConfirmacion(e.target.value)}/>
        </div>
         <>
         {error && <p style={{ color: "red" }}> {error} </p>}
        <button type="submit" className="finalizar"> Finalizar Compra </button>
         </>
        
      </form>
      <hr />
      <div className="orden">
       {ordenId && (
        <strong>
          ¡Gracias por tu compra! Tu número de Orden es {ordenId}{" "}
        </strong>
       )}
      </div>
      
    </div>
  );
};

export default Checkout;
