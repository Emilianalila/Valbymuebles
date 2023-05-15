import CardWidget from "../CardWidget/CardWidget"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from "./assets/transparente.png"
import "./NavBar.css"
import { NavLink } from "react-bootstrap";
import imgvista from "./assets/lunatransparente.png"
import { useState } from "react";

const NavBar = () => {

  const [modoOscuro, setModoOscuro] = useState(false);
    
  const cambiarModo = () => {
      setModoOscuro (!modoOscuro);
  }
  const estilo = modoOscuro? "oscuro" : "claro";

  return (
    <Navbar style={{ backgroundColor: "#f1ede8" }} expand="lg">
      <Container className= {estilo}>
        <Navbar.Brand href="#home">
            <img className ="imgLogo" src= {logo} alt="logo-valby"/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto mr-3" > 
            <Nav.Link style={{color:"black"}} href="#home">Muebles</Nav.Link>
            <Nav.Link style={{color:"black"}} href="#link">Organizadores</Nav.Link>
            <Nav.Link style={{color:"black"}} href="#link">Jardín</Nav.Link>
            <Nav.Link style={{color:"black"}} href="#link">Contacto</Nav.Link>
            <Nav.Link onClick={cambiarModo} href="#link"><img className="imgVista" src={imgvista} alt="Imagen vista claro oscuro"/>{modoOscuro ? "claro":"oscuro"}</Nav.Link>
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