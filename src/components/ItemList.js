import React from "react";
import Item from "./Item";
import { Spinner } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const ItemList = ({ product }) => {
  console.log(product);

  return (
    <div>
      {product.length ? (
        product.map((product) => <Item product={product} />)
      ) : (
        <Spinner className="my-4" animation="border" variant="primary" />
      )}
    </div>
  );
};

export default ItemList;
