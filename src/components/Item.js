import React from "react";
import { Link } from "react-router-dom";
import { Card, Badge } from "react-bootstrap";
const Item = ({ product }) => {
  return (
    <Card style={{ width: "18rem" }} className="text-center me-4 mt-3">
      <Card.Img variant="top" className="mt-3" src={product.imgUrl} />
      <Card.Body className="text-dark">
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>
          <Badge className="bg-dark">Stock: {product.stock}</Badge>
        </Card.Text>
        <Link to={`/item/${product.id}`} className="btn btn-secondary">
          Mas Informacion
        </Link>
      </Card.Body>
    </Card>
  );
};

export default Item;
