import React from "react";
import { Form, Field } from "formik";

function Buyer({ errors }) {
  return (
    <div className={"m-2"}>
      <Form>
        <div className={"d-flex flex-column m-3"}>
          <h3 className={"text-center"}>Registro de compra</h3>
          <label>Nombre: </label>
          <Field name={"name"} type={"text"} />
          <small>{errors.nombre}</small>
          <label>Telefono: </label>
          <Field name={"phone"} type={"number"} />
          <small>{errors.telefono}</small>
          <label>Email: </label>
          <Field name={"email"} type={"email"} />
          <small>{errors.email}</small>
        </div>
        <button className={"btn btn-success"} type={"submit"}>
          {" "}
          Enviar
        </button>
      </Form>
    </div>
  );
}

export default Buyer;
