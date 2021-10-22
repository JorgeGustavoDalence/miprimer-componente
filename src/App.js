//import React from "react";
//import "./components/styles/App.css";
//import "bootstrap";
//import AppRoutes from "./components/Routes/AppRoutes";
//import { ProviderCustomizado } from "./components/CartContext";

//const App = () => {
  //return (
    //<ProviderCustomizado>
      //<AppRoutes />
    //</ProviderCustomizado>
 // );
//};

//export default App;
import React, {useEffect, useState} from "react";
import {getFirestore} from "./firebase";

const App = () => {
    const [loading, setLoading] = useState(false);
    const [celuData, setceluData] = useState([]);
    useEffect(() => {
      setLoading(true);
      const db = getFirestore();
      const itemCollection = db.collection("celuData");
      itemCollection.get().then((querySnapshot) => {
        if(querySnapshot.size === 0) {
          console.log("No Hay resultados");
        }
        setceluData(querySnapshot.docs.map(doc => doc.data()));
      }).catch((error) => {
        console.log("Error al traer los items", error);
      }).finally(() => {
        setLoading(false);
      })
    }, []);
    console.log(celuData);
    return (
    <>
      <div>{loading && <p>Cargando Informacion...</p>}</div>
      {!loading && celuData.map(item => {
        return(
        <ul key={item.categoryId}>
          <li key={item.categoryId}>{item.categoryId}</li>
          <li key={item.descripcion}>{item.descripcion}</li>
          <li key={item.imgUrl}>{item.imgUrl}</li>
          <li key={item.precio}>{item.precio}</li>
          <li key={item.stock}>{item.stock}</li>
          <li key={item.title}>{item.title}</li>
        </ul>
        )
      })
      }
    </>
  )}


    export default App;
