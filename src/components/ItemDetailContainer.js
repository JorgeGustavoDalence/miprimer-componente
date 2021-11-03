import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import {firestore} from "../firebase/index";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const db = firestore;

    const coleccion = db.collection("celuData");
    const consulta = coleccion.get();

    consulta.then((resultado) => {
      resultado.docs.forEach((product) => {
        const producto_final = {
          id: product.id,
          ...product.data(),
        };
        if (producto_final.id === id) {
          setProduct(producto_final);
        }
      });
    });
  }, [id]);

  return <ItemDetail product={product} />;
};

export default ItemDetailContainer;
