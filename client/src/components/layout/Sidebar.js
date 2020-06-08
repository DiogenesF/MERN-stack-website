import React, { Fragment } from "react";
import Fox from "../../images/fox-gradient.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { connect } from "react-redux";

const Sidebar = ({ auth }) => {
  return (
    <Fragment>
      {auth.token ? (
        <ul
          className="navbar-nav sidebar sidebar-dark accordion" //toggled e not toggled
          style={{ backgroundColor: "#db3d44" }}
          id="accordionSidebar"
        >
          <Link
            style={{ marginTop: "40px" }}
            className="sidebar-brand d-flex align-items-center justify-content-center"
            to="/admin/portifolios"
          >
            <div className="sidebar-brand-icon">
              <img
                style={{ borderRadius: "50%" }}
                src={Fox}
                alt="Legis"
                width="80"
                height="80"
              ></img>
            </div>
          </Link>

          <div style={{ marginTop: "40px" }} className="sidebar-heading">
            Interface
          </div>

          <li className="nav-item">
            <Link className="nav-link" to="/admin/portifolios">
              <FontAwesomeIcon icon="book" size="lg" />
              <span>Portifolio</span>
            </Link>
            <a className="nav-link" href="#!">
              <FontAwesomeIcon icon="flag" size="lg" />
              <span>Banners</span>
            </a>
            <a className="nav-link" href="#!">
              <FontAwesomeIcon icon="user-friends" size="lg" />
              <span>Membros</span>
            </a>
            <a className="nav-link" href="#!">
              <FontAwesomeIcon icon="phone" size="lg" />
              <span>Contato</span>
            </a>
          </li>

          <div className="text-center d-none d-md-inline">
            <button className="rounded-circle border-0" id="sidebarToggle">
              <FontAwesomeIcon icon="less-than" color="white" />
            </button>
          </div>
        </ul>
      ) : (
        ""
      )}
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(Sidebar);
