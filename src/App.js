import React from 'react';
import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './components/styles/App.css';
import {Row,Container,Col,Card} from 'react-bootstrap'
import ItemListContainer from "./components/ItemListContainer";
import ItemCount from "./components/ItemCount";

function App() {
  
  const product = {
    id: 1,
    item: "Celular",
    details: "informacion detallada",
    stock: 20,
    initial: 1,
    onAdd: (stock,cantidad) => {
      alert(`Se agregarán ${cantidad} unidades al carrito`)
      return stock-cantidad
    },
    precio: 100,
  };
  return (
    <>
      {/* DESAFIO 2  */}
      <Container fluid>
        <header>
          <NavBar />
        </header>
       </Container>
      
      {/* DESAFIO 04  */}
      <Container className="d-flex justify-content-center">
        <Row>
          <Col md="6">
            {/* Desafio 04 */}
            <Card>
              <h1>Venta de Celulares</h1>
              <Card.Img variant="top" src="https://i.blogs.es/addc23/samsung-galaxy-s10/1366_2000.jpg"/>
              <Card.Body>
                <Card.Title>Samsung Galaxy S10</Card.Title>
                <Card.Text>
                Galaxy S10 incorpora el último procesador Exynos, 8 GB de memoria RAM y una pantalla AMOLED Infinity-O con resolución 2K+, así como una triple cámara trasera.
                <strong><p>PRECIO: $80.000</p> </strong>
               
                </Card.Text>
                
                <ItemCount props={product} /> {/* Desafio 04 */}
              </Card.Body>
            </Card>
          </Col>
          <Col md="6">
            {/* Desafio 03 */}
            <ItemListContainer greeting="SALUDOS!" />{" "}
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
 