import { Modal, Card, Badge } from "react-bootstrap";
import ItemCount from "../components/ItemCount";

const ItemDetail = (props) => {
  const { precio, title, stock, url, descripcion, id } = props.props;
  const product = {
    stock: stock,
    initial: 1,
    onAdd: (stock, cantidad) => {
      alert(`Se agregarán ${cantidad} unidades al carrito`);
      return stock - cantidad;
    },
    precio: precio,
  };

  return (
    <>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Card> 
          <Card.Img variant="top" src={url} width="80%" />
          <Card.Body>
            <Card.Text>
              <span style={{ textAlign: "center" }}>
                <Badge bg="success">SKU: {id}</Badge>
              </span>
              <br />
              <span>{descripcion}</span>
              <br />
              <span>
                <Badge bg="danger">Precio: ${precio}</Badge>
              </span>
            </Card.Text>
            <ItemCount props={product} /> {/* <-- Entregable 04 */}
          </Card.Body>
        </Card>
      </Modal.Body>
    </>
  );
};

export default ItemDetail;
