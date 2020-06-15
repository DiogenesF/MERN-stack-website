import React, { useState } from "react";
import { Link } from "react-router-dom";
import Fox from "../../images/foxbrand.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const logo = {
  backgroundImage: "url('" + Fox + "')",
  backgroundRepeat: "no-repeat",
  backgroundSize: "contain",
  width: "120px",
  height: "70px",
};

const Header = (props) => {
  const [actives, setActives] = useState({
    inicio: "active",
    sobre: "",
    team: "",
    portifolio: "",
  });

  const onClick = (e) => {
    if (e.target.name === "inicio") {
      setActives({ inicio: "active", sobre: "", portifolio: "" });
    }
    if (e.target.name === "sobre") {
      setActives({ inicio: "", sobre: "active", portifolio: "" });
    }
    if (e.target.name === "team") {
      setActives({ inicio: "", sobre: "", team: "active", portifolio: "" });
    }
    if (e.target.name === "portifolio") {
      setActives({ inicio: "", sobre: "", portifolio: "active" });
    }
  };

  return (
    <header
      style={{ boxShadow: "0 2px 10px -6px black", backgroundColor: "#73002b" }}
      id="header"
      className="fixed-top"
    >
      <div className="container d-flex align-items-center">
        {/*Mobile*/}
        <button type="button" className="mobile-nav-toggle d-lg-none">
          <div className="nav-item dropdown no-arrow">
            <div
              className="nav-link dropdown-toggle"
              id="userDropdown"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <FontAwesomeIcon icon="bars" color="red" size="lg" />
            </div>

            <div
              style={{
                width: "57vw",
                fontSize: "90%",
                textAlign: "center",

                paddingTop: "0px",
              }}
              className="dropdown-menu dropdown-menu-right shadow animated--grow-in"
              aria-labelledby="userDropdown"
            >
              <a
                style={{ paddingTop: "15px" }}
                className="dropdown-item"
                href="#!"
              >
                Inicio
              </a>
              <a
                style={{ paddingTop: "15px" }}
                className="dropdown-item"
                href="#!"
              >
                Sobre nos
              </a>
              <a
                style={{ paddingTop: "15px" }}
                className="dropdown-item"
                href="#!"
              >
                Portifolio
              </a>
            </div>
          </div>
        </button>
        {/*End mobile*/}
        <Link to="/" className="mr-auto logo" style={logo}></Link>
        <nav
          className="nav-menu d-none d-lg-block"
          style={{ marginTop: "-10px" }}
        >
          <ul>
            <li onClick={(e) => onClick(e)} className={`${actives.inicio}`}>
              <a name="inicio" className="nav-legis" href="#inicioCarousel">
                Inicio
              </a>
            </li>
            <li onClick={(e) => onClick(e)} className={`${actives.sobre}`}>
              <a name="sobre" className="nav-legis" href="#about">
                Sobre Nós
              </a>
            </li>
            <li onClick={(e) => onClick(e)} className={`${actives.team}`}>
              <a name="team" className="nav-legis" href="#team">
                Membros
              </a>
            </li>
            <li onClick={(e) => onClick(e)} className={`${actives.portifolio}`}>
              <a name="portifolio" className="nav-legis" href="#services">
                Portifolio
              </a>
            </li>
            <li onClick={(e) => onClick(e)} className={`${actives.contato}`}>
              <a name="contato" className="nav-legis" href="#contact">
                Contato
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
