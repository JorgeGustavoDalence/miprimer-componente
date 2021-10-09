import React, { useState, useEffect } from "react";
import ItemList from "./ItemList";
import celuData from "../assets/Data/celu.json";
import { Row, Col, Container } from "react-bootstrap";

function ItemListContainer() {
  const [productList, setproductList] = useState(0);

  useEffect(() => {
    const ackData = new Promise((resolve, reject) => {
      setTimeout(function () {
        resolve(celuData);
      }, 2000);
    });

    ackData.then((response) => {
      setproductList(response);
    });
  }, []);

  return (
    <>
      <Container>
        <div md={4} className="d-flex justify-content-center">
          <Row className="col-lg-6 col-md-12 mb-4 mb-md-0">
            <Col>
              <ItemList items={productList} />
            </Col>
          </Row>
        </div>
      </Container>
    </>
  );
}

export default ItemListContainer;
