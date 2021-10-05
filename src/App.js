import React from 'react';
import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './components/styles/App.css';
import {Container, Row} from 'react-bootstrap'
import ItemListContainer from './components/ItemListContainer';

function App() {
  
  return (
    <>
      {/* DESAFIO 2  */}
      <Container fluid>
        <header>
          <NavBar />
        </header>
       </Container>
       <Container>
  <Row>
   
    <ItemListContainer />{" "}
    
  </Row>

   
</Container>
      
      
    </>
  );
}


export default App;
 