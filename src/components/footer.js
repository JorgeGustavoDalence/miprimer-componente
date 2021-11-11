import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="bg-light text-start text-lg-start">
        <hr />
        <div className="container-fluid px-5 p-4">
          <div className="row">
            <div className="col-lg-6 col-md-12 mb-4 mb-md-0 text-start">
              <h5 className="text-uppercase">Sobre Nosotros</h5>
              <p>
                CELUTIENDA es un negocio que se dedica a la venta online de
                celulares, recientemente abierto, pronto dispondremos de mas
                productos, accesorios, etc.
              </p>
            </div>

            <div className="col-lg-6 col-md-12 mb-4 mb-md-0 text-end">
              <h5 className="text-uppercase">Contáctenos</h5>

              <address>
                <strong>CeluTienda.srl</strong>
                <br />
                Villa Luro, CABA
                <br />
                tiendacelu@gmail.com
                <br />
                <abbr title="Phone"></abbr> (54 9) 1121679374
              </address>
            </div>
          </div>
        </div>

        <div
          className="text-center p-3"
          style={{ backgroundColor: "#222", color: "#fff" }}
        >
          {" "}
          © 2021 Copyright:
        </div>
      </footer>
    </>
  );
};

export default Footer;
