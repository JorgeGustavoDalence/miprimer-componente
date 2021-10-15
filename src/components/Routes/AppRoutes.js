import React from 'react';
import { BrowserRouter as Router, Switch, Route,} from "react-router-dom";
import NavBar from "../NavBar";
import ItemListContainer from "../ItemListContainer";
import ItemDetailContainer from "../ItemDetailContainer";
import Cart from '../Cart';
import Footer from '../Footer'



function AppRoutes() {
    return (
        <div className={'h-100'}>
            <Router>
                <NavBar/>
                <h1 className="celu">CELUTIENDA</h1>
               
                <Switch>
                  <Route exact path='/'>
                  
                    <ItemListContainer />
                  </Route>
                  <Route exact path='/categoria/:id'>
                    <ItemListContainer />
                  </Route>
                  <Route exact path='/item/:id'>
                    <ItemDetailContainer />
                  </Route>
                  <Route exact path='/cart'>
                    <Cart />
                  </Route>
                </Switch>
                <Footer />
            </Router>
        </div>
    );
}

export default AppRoutes;