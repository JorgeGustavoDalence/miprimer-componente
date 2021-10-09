import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="bg-light text-center text-lg-start">
        <hr />
        <div className="container p-4">
          <div className="row">
            <div className="col-lg-6 col-md-12 mb-4 mb-md-0 text-start">
              <h5 className="text-uppercase">Sobre Nosotros</h5>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste
                atque ea quis molestias. Fugiat pariatur maxime quis culpa
                corporis vitae repudiandae aliquam voluptatem veniam, est atque
                cumque eum delectus sint!
              </p>
            </div>

            <div className="col-lg-6 col-md-12 mb-4 mb-md-0 text-end">
              <h5 className="text-uppercase">Contáctenos</h5>

              <address>
                <strong>CeluTienda.srl</strong>
                <br />
                Avenida Gaona 4356
                <br />
                Villa Luro, CABA
                <br />
                <abbr title="Phone">P:</abbr> (54 9) 1121679374  
              </address>
            </div>
          </div>
        </div>

        <div
          className="text-center p-3"
          style={{ backgroundColor: "#222", color: "#fff" }}
        >
          © 2021 Copyright:
          
        </div>
      </footer>
    </>
  );
};

export default Footer;
