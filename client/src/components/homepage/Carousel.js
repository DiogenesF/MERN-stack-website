import React from "react";
import "./Style.css";

const Carousel = (props) => {
  return (
    <div
      id="carouselExampleControls"
      className="carousel slide"
      data-ride="carousel"
    >
      <div className="carousel-inner">
        <section
          className="carousel-item active "
          style={{
            marginTop: "94px",
            background:
              "url('https://img.freepik.com/vetores-gratis/fundo-de-banner-de-tecnologia-com-formas-hexagonais-e-espaco-de-texto_1017-22589.jpg?size=626&ext=jpg')",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
          id="hero"
        >
          <div className="hero-container">
            <h1 style={{ fontSize: "40px", color: "green" }}>TESTE 0</h1>
          </div>
        </section>

        <section
          className="carousel-item"
          style={{
            marginTop: "94px",
            background:
              "url('https://wallpaperplay.com/walls/full/6/6/c/8130.jpg')",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
          id="hero"
        >
          <div className="hero-container">
            <h1 style={{ fontSize: "40px", color: "red" }}>TESTE 1</h1>
          </div>
        </section>
      </div>
      <a
        className="carousel-control-prev"
        href="#carouselExampleControls"
        role="button"
        data-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a
        className="carousel-control-next"
        href="#carouselExampleControls"
        role="button"
        data-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
  );
};

export default Carousel;
