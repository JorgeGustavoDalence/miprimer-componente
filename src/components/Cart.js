import { CartContext } from "./CartContext";
import { useContext } from "react";
import { Link } from "react-router-dom";
import RegistrarCompra from "./RegistrarCompra";
import { ListGroup, ListGroupItem, Button } from "react-bootstrap";
import Contenido from "./Contenido";

function Cart(props) {
  const { carrito, setCarrito, setContador, contador, handleShow } =
    useContext(CartContext);

  const totalCarrito = [0];
  let carritoProductos = [];

  function removeAll() {
    setCarrito([]);
    setContador(0);
  }

  function removeProduct(item) {
    carritoProductos = carritoProductos.filter(
      (producto) => producto.id !== item.id
    );
    setCarrito(carritoProductos);
    let counter = 0;
    carritoProductos.map((item2) => {
      return (counter += item2.cantidad);
    });

    setContador(counter);
  }

  if (contador) {
    return (
      <div className="d-flex align-items-center flex-column">
        <h1 className="textocarrito"> CARRITO </h1>
        <ul>
          {carrito.map((item, index) => {
            const totalProducto = item.cantidad * item.precio;
            carritoProductos.push(item);
            totalCarrito.push(totalProducto);
            return (
              <div className="carro">
                <ListGroup horizontal key={index} className={"mt-3"}>
                  <ListGroupItem>{item.title}</ListGroupItem>
                  <ListGroupItem>
                    Precio unitario: ${item.precio} -{" "}
                  </ListGroupItem>
                  <ListGroupItem>Cantidad: {item.cantidad} - </ListGroupItem>
                  <ListGroupItem>
                    Precio Total: ${totalProducto} -{" "}
                  </ListGroupItem>
                  <button
                    className={"btn btn-danger"}
                    onClick={() => removeProduct(item)}
                  >
                    {" "}
                    X
                  </button>
                </ListGroup>
              </div>
            );
          })}

          {carrito.length > 0 && (
            <button className={"btn btn-danger m-2 center"} onClick={removeAll}>
              BORRAR TODO
            </button>
          )}
        </ul>

        <h3 className="text-light">
          Total: ${totalCarrito.reduce((prev, next) => prev + next)}
        </h3>
        <Button variant="warning" onClick={handleShow} className={"m-3"}>
          Finalizar Compra
        </Button>
        <RegistrarCompra />
      </div>
    );
  } else {
    return (
      <>
        <Contenido />
        <div className="carroVacio">
          <h1 className="text-light"> CARRITO VACIO!</h1>
          <Link className={"btn btn-warning m-2"} to={"/"}>
            {" "}
            Seleccionar productos{" "}
          </Link>
        </div>
      </>
    );
  }
}

export default Cart;
