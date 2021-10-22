import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "../NavBar";
import ItemListContainer from "../ItemListContainer";
import { Container } from "react-bootstrap";
import ItemDetailContainer from "../ItemDetailContainer";
import Cart from "../Cart";
import Footer from "../footer";

function AppRoutes() {
  return (
    <Router>
      <header>
        <Container fluid>
          <NavBar />
          <h1 className="celu">CELUTIENDA</h1>
        </Container>
      </header>

      <Switch>
        <Route exact path="/">
          <Container fluid>
            <ItemListContainer />
          </Container>
        </Route>
        <Route exact path="/categoria/:id">
          <ItemListContainer />
        </Route>
        <Route exact path="/item/:id">
          <ItemDetailContainer />
        </Route>
        <Route exact path="/cart">
          <Cart />
        </Route>
      </Switch>
      <Container fluid>
        <Footer />
      </Container>
    </Router>
  );
}

export default AppRoutes;
