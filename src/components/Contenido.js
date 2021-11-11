import React from "react";
import { Carousel } from "react-bootstrap";
import "../components/styles/App.css";

const Contenido = () => {
  return (
    <div className="App-header">
      <Carousel variant="dark">
        <Carousel.Item
          style={{
            borderBottom: "0.50px solid #bf9f11",
          }}
        >
          <img
            className="d-block w-100"
            src="https://mooscle.com/app/uploads/2019/05/samsung_logo_black_background.png"
            height="300"
            width="800"
            alt="logo samsung"
          />
        </Carousel.Item>
        <Carousel.Item
          style={{
            borderBottom: "0.50px solid #bf9f11",
          }}
        >
          <img
            className="d-block w-100"
            src="https://img.unocero.com/2019/09/modo-oscuro-huawei.jpg"
            height="300"
            width="800"
            alt="logo huawei"
          />
        </Carousel.Item>
        <Carousel.Item
          style={{
            borderBottom: "0.50px solid #bf9f11",
          }}
        >
          <img
            className="d-block w-100"
            src="https://logos-marcas.com/wp-content/uploads/2020/07/Asus-Emblema.jpg"
            height="300"
            width="800"
            alt="logo asus"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Contenido;
