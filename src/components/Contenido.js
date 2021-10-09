import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import '../components/styles/App.css'



const Contenido = () => {
  return (
    <>  
        <h1 className= "celu">CELUTIENDA</h1>
      <Container style={{ marginTop: 50, marginBottom: 30, marginLeft: 460 }}>
        <Row>
            <div className= "fotos">
          <Col md={3} lg={3} className="text-center mb-4">
        
            <img
              style={{ width: "100%" , borderRadius: 10 }}
              src= 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcrStZUTHTUN8FwO342U--wunkKdjJ4cXAnBEXF1Yy2IfN_jkYZAd6zekR4omscEvV7MU&usqp=CAU'
              alt="logo huawei"
            />
          </Col>
          <Col md={3} lg={3} className="text-center mb-4">
            <img
              style={{ width: "100%", borderRadius: 10 }}
              src='https://i.pinimg.com/originals/cb/d4/1f/cbd41f7b15a61fe64c06502bacc8d6b6.jpg'
              alt="logo apple"
              />
              </Col>
              <Col md={3} lg={3} className="text-center mb-4">
            <img
              style={{ width: "100%", borderRadius: 10 }}
              src= "https://cdn.redmondpie.com/wp-content/uploads/2014/04/Samsung-logo.png"
              
              alt="logo samsung"
            
            />
            
          </Col>
          </div>
          
        </Row>
      </Container>
    </>
  );
};

export default Contenido;
