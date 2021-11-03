import React, { useState, useEffect } from "react";
import ItemList from "./ItemList";
import 'bootstrap/dist/css/bootstrap.css';
import  "./styles/ItemListContainer.css";
import { useParams } from "react-router-dom";
import {firestore} from "../Firebase/index";



const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const { id: idCategory } = useParams();
 

  useEffect(() => {
    const db = firestore;

    const coleccion = db.collection("celuData");
    if (idCategory === undefined) {
      const consulta = coleccion.get();
      consulta.then((resultado) => {
        const ArrayProductos = [];
        resultado.docs.forEach((producto) => {
          const producto_final = {
            id: producto.id,
            ...producto.data(),
          };
          ArrayProductos.push(producto_final);
        });
        setProducts(ArrayProductos);
      });
    } else {
      const consulta = coleccion.where("categoria", "==", idCategory).get();
      consulta.then((resultado) => {
        const ArrayProductos = [];
        resultado.docs.forEach((producto) => {
          const producto_final = {
            id: producto.id,
            ...producto.data(),
          };
          ArrayProductos.push(producto_final);
        });
        setProducts(ArrayProductos);
      });
    }
  }, [idCategory]);

  return (
    <div className="container">
    
    <ul className="grilla">
        <ItemList product={products} />
    </ul>
</div>
  );
};

export default ItemListContainer;
