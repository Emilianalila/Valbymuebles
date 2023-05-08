import "./Vista.css"
import { useState } from 'react'

const Vista = () => {
    const [modoOscuro, setModoOscuro] = useState(false);
    
    const cambiarModo = () => {
        setModoOscuro (!modoOscuro);
    }

    const estilo = modoOscuro? "oscuro" : "claro";

  return (
    <div className= {estilo}>
       <button onClick={ cambiarModo } > {modoOscuro ? "claro":"oscuro"} </button>
       <h2>Componente Vista</h2>
       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat aperiam aspernatur quibusdam aliquam, quidem dolorum rerum ipsam praesentium pariatur officia, deserunt officiis placeat esse libero odit quod voluptatibus similique vel.</p>
    </div>
  )
}

export default Vista