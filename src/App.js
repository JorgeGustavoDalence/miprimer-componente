import React from 'react';
import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './components/styles/App.css';
import {Container} from 'react-bootstrap'
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
       <ItemListContainer />{" "}
      
      
    </>
  );
}


export default App;
 