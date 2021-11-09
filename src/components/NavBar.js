import React from "react";
import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import CartWidget from "./CartWidget";

const NavBar = (props) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid px-5">
        <NavLink className="navbar-brand text-warning" to="/">
          CELUTIENDA
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink
                activeClassName="active"
                className="nav-link fontSize"
                to={"/"}
              >
                Inicio
              </NavLink>
            </li>
            <li className="nav-item dropdown">
              <a href
                className="nav-link dropdown-toggle fontSize"
                id="navbarDropdownMenuLink"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                {" "}
                Elegir Marcas
              </a>
              <ul
                className="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <li>
                  <NavLink
                    className="dropdown-item fontSize"
                    to={"/categoria/Samsung"}
                  >
                    Samsung
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="dropdown-item fontSize"
                    to={"/categoria/Huawei"}
                  >
                    Huawei
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="dropdown-item fontSize"
                    to={"/categoria/Asus"}
                  >
                    Asus
                  </NavLink>
                </li>
              </ul>
            </li>
          </ul>
          <CartWidget />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
