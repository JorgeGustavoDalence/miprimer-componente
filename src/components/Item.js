import { Card, Badge, Container } from "react-bootstrap";
// import ItemCount from "./ItemCount";
import ItemDetailContainer from "./ItemDetailContainer";

function Item(props) {
  const { nombre, precio, url } = props.props;

  return (
    <div>
       <Container>

       <Card>
       <Card.Img variant="top" src={url} width="60%" />
       <Card.Body>
          <Card.Title>{nombre}</Card.Title>
          <Card.Text style={{ textAlign: "center" }}>
            <Badge bg="success">Precio: {precio}</Badge>
          </Card.Text>
          <ItemDetailContainer props={props.props} />
        </Card.Body>
      </Card>
   
</Container>
</div>
 );
}


export default Item;