import React from "react";

import Fox2 from "../../images/foxlogin.png";

const Portifolio = (props) => {
  return (
    <section
      id="services"
      className="services"
      style={{ backgroundColor: "#73002b" }}
    >
      <div className="container">
        <div style={{ marginTop: "50px" }} className="section-title">
          <h3 style={{ color: "white" }} className="legis-size-title">
            PORTIFOLIO
          </h3>
        </div>
        <div className="row">
          <div className="col-md-4 d-flex align-items-stretch mt-4">
            <div
              style={{
                paddingBottom: "30px",
              }}
              className="icon-box"
            >
              <img
                style={{
                  height: "300px",
                  width: "100%",
                  objectFit: "fill",
                }}
                className="figure-img img-fluid"
                src={Fox2}
                alt="aq"
              />
              <p className="description">Titulo aqui Titulo aquiTitulo a</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portifolio;
