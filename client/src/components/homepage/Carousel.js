import React, { useEffect, Fragment } from "react";
import "./Style.css";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getPortifolios } from "../../redux/actions/portifolio";

const Carousel = ({ getPortifolios, portifolio: { portifolios, loading } }) => {
  useEffect(() => {
    getPortifolios();
  }, [getPortifolios, loading]);

  return (
    <Fragment>
      {portifolios ? (
        <div
          id="inicioCarousel"
          className="carousel slide"
          data-ride="carousel"
        >
          <div className="carousel-inner">
            {portifolios.map((each, index) => (
              <section
                key={each._id}
                className={`carousel-item ${index === 0 ? "active" : ""} `}
                style={{
                  marginTop: "94px",
                  background: `url('${each.img}')`,
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                }}
                id="hero"
              >
                <div className="hero-container">
                  <h1 style={{ fontSize: "40px", color: "green" }}>
                    {each.titulo}
                  </h1>
                  <div style={{ fontSize: "30px", color: "white" }}>
                    <p
                      dangerouslySetInnerHTML={{
                        __html: each.descricao,
                      }}
                    />
                  </div>
                </div>
              </section>
            ))}
          </div>
          <a
            className="carousel-control-prev"
            href="#inicioCarousel"
            role="button"
            data-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#inicioCarousel"
            role="button"
            data-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      ) : (
        ""
      )}
    </Fragment>
  );
};

Carousel.propTypes = {
  portifolio: PropTypes.object.isRequired,
  getPortifolios: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  portifolio: state.portifolio,
});

export default connect(mapStateToProps, { getPortifolios })(Carousel);
