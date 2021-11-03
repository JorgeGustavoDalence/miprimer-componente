import React from "react";
import { Carousel } from "react-bootstrap";
import "../components/styles/App.css";

const Contenido = () => {
  return (
    <header className="App-header">
      <Carousel variant="dark">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://mooscle.com/app/uploads/2019/05/samsung_logo_black_background.png"
            height="500"
            width="1000"
            alt="logo samsung"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://img.unocero.com/2019/09/modo-oscuro-huawei.jpg"
            height="500"
            width="1000"
            alt="logo huawei"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://logos-marcas.com/wp-content/uploads/2020/07/Asus-Emblema.jpg"
            height="500"
            width="1000"
            alt="logo asus"
          />
        </Carousel.Item>
      </Carousel>
    </header>
  );
};

export default Contenido;
