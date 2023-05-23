import CardWidget from "../CardWidget/CardWidget"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from "./assets/transparente.png"
import "./NavBar.css"
import { NavLink} from "react-router-dom"; 
import imgvista from "./assets/lunatransparente.png"
import { useState } from "react";
import { Link } from "react-router-dom";


const NavBar = () => {

  const [modoOscuro, setModoOscuro] = useState(false);
    
  const cambiarModo = () => {
      setModoOscuro (!modoOscuro);
  }
  const estilo = modoOscuro? "oscuro" : "claro";

  return (
    <Navbar style={{ backgroundColor: "#f1ede8" }} expand="lg">
      <Container className= {estilo}>
        <Link to="/">
            <img className ="imgLogo" src= {logo} alt="logo-valby"/>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto mr-3" > 
            <Link className="navBar" to="/">Inicio</Link>
            <Link className="navBar" to="/productos">Productos</Link>
            <Link className="navBar" to="/contactanos">Contáctanos</Link>
            <Link className="navBar" onClick={cambiarModo}><img className="imgVista" src={imgvista} alt="Imagen vista claro oscuro"/>{modoOscuro ? "claro":"oscuro"}</Link>
          </Nav>
        </Navbar.Collapse>
        <NavLink>
          <CardWidget/>
        </NavLink>
      </Container>
    </Navbar>
  );
}

export default NavBar