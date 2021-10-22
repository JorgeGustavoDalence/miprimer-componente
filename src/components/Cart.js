import { CartContext } from "./CartContext";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { ListGroup, ListGroupItem } from "react-bootstrap";

function Cart(props) {
  const { carrito, setCarrito, setContador, contador } =
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
      counter += item2.cantidad;
    });

    setContador(counter);
  }

  if (contador) {
    return (
      <div className="d-flex align-items-center flex-column">
        <h1 className="text-success"> CARRITO </h1>
        <ul>
          {carrito.map((item, index) => {
            const totalProducto = item.cantidad * item.precio;
            carritoProductos.push(item);
            totalCarrito.push(totalProducto);
            return (
              <div>
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
          <h3 className="text-light">
            Total: ${totalCarrito.reduce((prev, next) => prev + next)}
          </h3>
          <Link className={"btn btn-warning m-2"} to={"/"}>
            {" "}
            Seguir Comprando
          </Link>
          {carrito.length > 0 && (
            <button className={"btn btn-danger m-2"} onClick={removeAll}>
              BORRAR TODO
            </button>
          )}
        </ul>
      </div>
    );
  } else {
    return (
      <div className="carroVacio">
        <h1 className="text-light"> Carro vacío!</h1>
        <Link className={"btn btn-warning m-2"} to={"/"}>
          {" "}
          Seleccionar productos{" "}
        </Link>
      </div>
    );
  }
}

export default Cart;
