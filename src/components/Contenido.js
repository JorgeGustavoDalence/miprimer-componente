import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../components/styles/App.css";



const Contenido = () => {
  return (
    <>  

      <Container>
           <Row>
              <Col>
              <ul className="fotos">
                <li>
                  <img
                  src= 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcrStZUTHTUN8FwO342U--wunkKdjJ4cXAnBEXF1Yy2IfN_jkYZAd6zekR4omscEvV7MU&usqp=CAU'
                  alt="logo huawei"
                  />
          </li>
          <li>
                  <img
                  src='https://i.pinimg.com/originals/cb/d4/1f/cbd41f7b15a61fe64c06502bacc8d6b6.jpg'
                  alt="logo apple"
                  />
             </li>
             <li>
                   <img
                  src= "https://cdn.redmondpie.com/wp-content/uploads/2014/04/Samsung-logo.png"
                  alt="logo samsung"
                  />
                  </li>
                  </ul>
              </Col>

           </Row>
         </Container>
    </>
  );
};

export default Contenido;
