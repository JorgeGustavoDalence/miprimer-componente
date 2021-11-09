import React, { Fragment, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";

const ItemCount = ({ stock, initial, onAdd }) => {
  const [value, setValue] = useState(initial);

  const add = (value) =>
    value < stock ? setValue(value + 1) : console.log("limite de stock");

  const substract = (value) =>
    value <= stock && value > initial
      ? setValue(value - 1)
      : console.log("limite es 0");

  return (
    <Fragment>
      <div className="my-2">
        <div className="btn-group">
          <button
            className="btn btn-outline-light"
            type="button"
            onClick={() => substract(value)}
          >
            -
          </button>
          <h5 className="mx-5 btn btn-outline-light">{value}</h5>
          <button
            className="btn btn-outline-light"
            type="button"
            onClick={() => add(value)}
          >
            +
          </button>
        </div>
      </div>
      <button
        className="my-1 px-4 btn btn-outline-warning"
        type="button"
        onClick={() => onAdd(value)}
      >
        Añadir al carrito
      </button>
    </Fragment>
  );
};

export default ItemCount;
