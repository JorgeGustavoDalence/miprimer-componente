import ItemCount from './ItemCount'
import { Card } from 'react-bootstrap';

function Item(props) {

    const { id, nombre, cantidad, descripcion, url } = props.props;
    const product = {
      stock: cantidad,
      initial: 1,

      onAdd: (stock, cantidad) => {
        alert(`Se agregarán ${cantidad} unidades al carrito`);
        return stock - cantidad;
      }
    }

    return(
    <> 
    <Card>
        <Card.Img variant="top" src={url}/>
        <Card.Body>
            <Card.Title>{nombre}</Card.Title>
            <Card.Text>
                <span style={{ textAlign: "center" }}>
               {id}
                </span>
                <br />
                <span>{cantidad}</span>
                <br />
                <span>{descripcion}</span>
            </Card.Text>
            <ItemCount props={product} /> {/* Desafio 04 */}
        </Card.Body>
    </Card>
    </>
    )
}

export default Item;