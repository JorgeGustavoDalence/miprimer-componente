import React, {useState, useEffect} from "react";
import ItemList from "./ItemList";
import celuData from '../assets/Data/celu.json'
import { Row, Col } from 'react-bootstrap';

function ItemListContainer() {
  const [productList, setproductList] = useState(0);

  useEffect(() => {
    // Instanciamos una promesa que se resolverá en 2 segundos
    // jalando los datos del archivo laptops.json
    const ackData = new Promise((resolve, reject) => {
      setTimeout(function () {
        resolve(celuData);
      }, 2000);
    });

    // Cuando la promesa sea "resolve" entonces ejecutará la función...
    ackData.then((response) => {
      setproductList(response);
    });
  }, []);

  return (
    <>
      <Row className="item-list-container">
        <Col md={12} className="d-flex justify-content-center">
          <ItemList items={productList} />
        </Col>
      </Row>
    </>
  );
}

  
  
  export default ItemListContainer;