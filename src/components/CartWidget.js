import React from "react";
import { useContext } from "react";
import "../components/styles/CartWidget.css";
import { Link } from "react-router-dom";
import { CartContext } from "./CartContext";
import { CgShoppingCart } from "react-icons/cg";

function CartWidget() {
  const { contador } = useContext(CartContext);

  return (
    <>
      <Link to="/cart">
        <button
          className="btn btn-info"
          style={{ backgroundColor: "#bf9f11", border: "2px solid #bf9f11" }}
        >
          <CgShoppingCart />
          &nbsp;
          {contador > 0 ? (
            <span className="badge bg-secondary">{contador}</span>
          ) : (
            ""
          )}
        </button>
      </Link>
    </>
  );
}

export default CartWidget;
