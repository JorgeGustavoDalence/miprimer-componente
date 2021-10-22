import React from "react";
import { useContext } from "react";
import "../components/styles/CartWidget.css";
import { Link } from "react-router-dom";
import { CartContext } from "./CartContext";
import { CgShoppingCart } from "react-icons/cg";

function CartWidget(props) {
  const { contador } = useContext(CartContext);

  return (
    <div
      style={{ visibility: contador === 0 ? "hidden" : "visible" }}
      className={"d-flex align-items-center"}
    >
      <li>
        <Link to={"Cart"} className="cartIcon">
          <CgShoppingCart />
        </Link>
      </li>
      <span style={{ color: "white" }}>{contador}</span>
    </div>
  );
}

export default CartWidget;
