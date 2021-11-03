import React, { useContext } from "react";
import { CartContext } from "../components/CartContext";
import { Modal } from "react-bootstrap";
import { firestore } from "../firebase/index";
import swal from "sweetalert";
import { Formik } from "formik";
import Buyer from "../components/Buyer/Buyer";
import * as Yup from "yup";

function RegistrarCompra(props) {
  const { carrito, setCarrito, setContador, contador, handleClose, show } =
    useContext(CartContext);

  async function cargarRegistroCompra(valores) {
    const db = firestore;
    const coleccion = await db.collection("Buyer");
    const nueva_orden = {
      buyer: {
        name: valores.name,
        phone: valores.phone,
        email: valores.email,
      },
      items: carrito,
      total: contador,
    };
    coleccion
      .add(nueva_orden)
      .then((resultado) => {
        swal(
          "Compra realizada con exito!",
          "Codigo de verificacion: " + resultado.id,
          "success",
          {
            button: "Salir",
          }
        );
      })
      .catch((error) => {
        console.log(error);
      });

    handleClose();
    setContador(0);
    setCarrito([]);
  }

  const ErrorSchema = Yup.object().shape({
    name: Yup.string()
      .required("Nombre es requerido")
      .min(3, "Nombre muy corto")
      .max(20, "Nombre muy largo"),
    phone: Yup.number().required("Telefono requerido").positive().integer(),
    email: Yup.string().email("Email invalido").required("Email es requerido"),
  });

  return (
    <Modal show={show} onHide={handleClose}>
      <Formik
        initialValues={{
          name: "",
          phone: "",
          email: "",
        }}
        onSubmit={(values) => {
          cargarRegistroCompra(values);
        }}
        validationSchema={ErrorSchema}
        component={Buyer}
      />
    </Modal>
  );
}

export default RegistrarCompra;
