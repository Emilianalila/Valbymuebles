import React from 'react'
import "./Footer.css"
import { ModalFooter, Col, Row, Container} from 'react-bootstrap'
import logoface from "./assets/logoface.png"
import logoinsta from "./assets/logoinsta.png"
import imgmercadolibre from "./assets/imgmercadolibre.png"
import fhone from "./assets/iconofhone.png"
import mail from "./assets/iconomail.png"
import gps from "./assets/iconogps.png"
import envio from "./assets/envio.png"


const Footer = () => {
  return (
    <>
    <ModalFooter className='modal-footer'>
    <Col>
     <Row md>
        <Col  id='columnanombre' md>
          <h4 className='nombrefooter'>Valbymuebles</h4>
          <h6>Seguinos</h6>
          <Container id='contenedoriconos'>
             <img id='imgseguinos' src= {logoface} alt="" />
             <img id='imgseguinos' src= {logoinsta} alt="" />
             <img id='imgseguinos' src= {imgmercadolibre} alt="" />
          </Container>
          </Col>
          <Col id='columnacontacto' md>
            <h6>Contacto</h6>
            <p><img id='imgfhone' src={fhone} alt="" />+54 11 3358-5073</p>
            <p><img id='imgfhone' src={mail} alt=""/> Soledademorales@gmail.com</p>
          </Col>
          <Col id='columnaenvios' md>
            <h6>Envios</h6>
            <p><img id='imgenvios' src={gps} alt="" /> Villa Urquiza</p>
            <p><img id='imgfhone' src={envio} alt=""/> Envios a todo el pais</p>
          </Col>
        </Row>
      </Col>
    </ModalFooter>
    <p className='copyright'>Todos los derechos reservados - copyright @ 2023</p>
    </>
  )
}

export default Footer