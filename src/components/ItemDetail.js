import React, { Fragment, useContext, useState } from "react";
import { Link } from "react-router-dom";
import ItemCount from "./ItemCount";
import { Spinner } from "react-bootstrap";
import { CartContext } from "./CartContext";
import "./styles/ItemDetail.css";

const ItemDetail = ({ product }) => {
  const [contadorDetail, setContadorDetail] = useState(0);
  const { setCarrito, carrito, setContador, contador } =
    useContext(CartContext);

  const handleClick = (cantidad) => {
    setContadorDetail(cantidad);
  };

  const onAdd = (cantidad) => {
    const itemConCantidad = { ...product, cantidad };

    let flag = false;
    let counter = 0;

    if (cantidad !== 0) {
      if (carrito.length > 0) {
        counter = 0;
        carrito.forEach((item) => {
          if (itemConCantidad.id === item.id) {
            item.cantidad += itemConCantidad.cantidad;
            setCarrito(carrito);
            handleClick(cantidad);
            flag = true;
          }
          counter += item.cantidad;
        });
        setContador(counter);
        if (!flag) {
          counter = contador;
          counter += cantidad;
          setContador(counter);
          setCarrito([...carrito, itemConCantidad]);
          handleClick(cantidad);
        }
      } else {
        setContador(itemConCantidad.cantidad);
        setCarrito([itemConCantidad]);
        handleClick(cantidad);
      }
    } else {
      alert("NO HAY STOCK PARA AGREGAR AL CARRITO");
    }
  };

  //let pathCart = "/Cart";

  if (product) {
    return (
      <div className="item-detail-container">
        <img
          className="image-product"
          height="430px"
          width="530px"
          src={product.imgUrl}
          alt={product.title}
        />

        <div className="description-container">
          <h1 className="title">{product.title}</h1>
          <h5 className="descripcion">Descripción: {product.descripcion}</h5>
          <h5 className="precio">Precio: $ {product.precio}</h5>
          <h6 className="seleccionarC">Seleccione cantidad:</h6>
          {contadorDetail === 0 && (
            <ItemCount stock={product.stock} initial={0} onAdd={onAdd} />
          )}
          {contadorDetail !== 0 && (
            <Fragment className="contador">
              <h5 className="cantSelect">
                Cantidad seleccionada: {contadorDetail}
              </h5>
              <Link className="btn btn-warning m-3" to="/Cart">
                Ir al Carrito
              </Link>
            </Fragment>
          )}
        </div>
      </div>
    );
  } else {
    return <Spinner />;
  }
};

export default ItemDetail;
