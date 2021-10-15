import React from 'react';
import './components/styles/App.css';
import 'bootstrap';
import AppRoutes from "./components/Routes/AppRoutes";
import {ProviderCustomizado} from "./components/CartContext";


const App = () => {

  return (

        <ProviderCustomizado>
            <AppRoutes />
        </ProviderCustomizado>
        
    );
}

export default App;
