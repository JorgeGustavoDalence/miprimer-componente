import { Card, Badge, Container } from "react-bootstrap";
import ItemDetailContainer from "./ItemDetailContainer";

function Item(props) {
  const { title, precio, url } = props.props;

  return (
    <Container>
      <div className="d-flex col-md-12 mb-4 mb-md-0 center">
        <Card>
          <Card.Img variant="top" src={url} width="60%" />
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text style={{ textAlign: "center" }}>
              <Badge bg="success">Precio: {precio}</Badge>
            </Card.Text>
            <ItemDetailContainer props={props.props} />
          </Card.Body>
        </Card>
      </div>
    </Container>
  );
}

export default Item;
