import React from 'react';
import Estado from './components/Estado';
import 'bootstrap/dist/css/bootstrap.min.css';
import './components/styles/App.css';
import Cart from './components/Cart'

function App() {
  return (
    <>
     <div className="App">
       <div className="Container-fluid bg-light">
          <header>
          <div className="text-sm-end bg-secondary">
           <Cart numero={5}></Cart>
           </div>
            <Estado/>
          </header>
       </div>

        <div className="jumbotron p-8 p-md-5 text-white rounded bg-dark">
          <div className="col-md-12 px-0">
            <h1 className="display-1 font-italic text-center text-danger">Venta de celulares</h1>
            <p className="lead my-1 text-center text-white">Catalogo grande de celulares</p>
           
                     </div>
        </div>    
      </div>
    </>
    );

  }

export default App;

