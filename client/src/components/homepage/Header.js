import React from "react";
import { Link } from "react-router-dom";
import Fox from "../../images/fox.png";

const logo = {
  backgroundImage: "url('" + Fox + "')",
  backgroundRepeat: "no-repeat",
  backgroundSize: "contain",
  width: "250px",
  height: "70px",
};

const Header = (props) => {
  return (
    <header id="header" className="fixed-top bg-white">
      <div className="container d-flex align-items-center">
        <Link to="/" className="mr-auto logo" style={logo}></Link>

        <nav
          className="nav-menu d-none d-lg-block"
          style={{ marginTop: "-10px" }}
        >
          <ul>
            <li className="active">
              <a className="nav-legis" href="#carouselExampleControls">
                Inicio
              </a>
            </li>
            <li>
              <a className="nav-legis" href="#about">
                Sobre Nós
              </a>
            </li>
            <li>
              <a className="nav-legis" href="#services">
                Serviços
              </a>
            </li>
            <li>
              <a className="nav-legis" href="#contact">
                Fale Conosco
              </a>
            </li>
            <li style={{ paddingRight: "25px" }}>
              <a className="nav-legis" href="#postsblog">
                Blog
              </a>
            </li>
            <li>
              <button className="botaoPadrao" href="blog.html">
                Consulta Marca
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
