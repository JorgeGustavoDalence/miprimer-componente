import React, { useState, useEffect } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import {firestore} from "../firebase";

const ItemListContainer = () => {
  const [products,setProducts] = useState([])
  const { id: idCategory } = useParams();
  console.log(idCategory);
  
  useEffect(() => {

      const db = firestore

      const coleccion = db.collection("celuData")
      if (idCategory === undefined ) {
          const consulta = coleccion.get()
          consulta.then((resultado) => {
              const ArrayProductos = []
              resultado.docs.forEach(producto => {
                  const producto_final = {
                      id: producto.id,
                      ...producto.data()
                  }
                  ArrayProductos.push(producto_final)
              })
              console.log(ArrayProductos);
              setProducts(ArrayProductos)
          })
      } else {
          const consulta = coleccion.where('categoria', '==', idCategory).get()
          consulta.then((resultado) => {
              const ArrayProductos = []
              resultado.docs.forEach(producto => {
                  const producto_final = {
                      id: producto.id,
                      ...producto.data()
                  }
                  ArrayProductos.push(producto_final)
              })
              console.log(ArrayProductos);
              setProducts(ArrayProductos)
          })
      }
  }, [idCategory])
  

  return (
      <div>
        
              <ItemList product={products} />
        
      </div>
  ) 

}

export default ItemListContainer 
 

