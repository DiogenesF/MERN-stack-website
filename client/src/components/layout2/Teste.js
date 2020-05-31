import React, { Fragment } from "react";
import Fox from "../../images/fox-gradient.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Teste = (props) => {
  return (
    <div id="wrapper">
      <ul
        className="navbar-nav sidebar sidebar-dark accordion" //toggled e not toggled
        style={{ backgroundColor: "#db3d44" }}
        id="accordionSidebar"
      >
        <a
          style={{ marginTop: "40px" }}
          className="sidebar-brand d-flex align-items-center justify-content-center"
          href="#!"
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
        </a>

        <div style={{ marginTop: "40px" }} className="sidebar-heading">
          Interface
        </div>

        <li className="nav-item">
          <a className="nav-link" href="#!">
            <FontAwesomeIcon icon="gavel" size="lg" />
            <span>Serviços</span>
          </a>
          <a className="nav-link" href="#!">
            <FontAwesomeIcon icon="flag" size="lg" />
            <span>Banners</span>
          </a>
          <a className="nav-link" href="#!">
            <FontAwesomeIcon icon="book" size="lg" />
            <span>Posts</span>
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

      <div id="content-wrapper" className="d-flex flex-column">
        <div id="content">
          <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
            <button
              id="sidebarToggleTop"
              className="btn btn-link d-md-none rounded-circle mr-3"
            >
              <FontAwesomeIcon icon="bars" color="red" />
            </button>

            <ul className="navbar-nav ml-auto">
              <div className="topbar-divider d-none d-sm-block"></div>

              <li className="nav-item dropdown no-arrow">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="userDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <span className="mr-2 d-none d-lg-inline text-gray-600 small">
                    Admin
                  </span>
                  <img className="img-profile rounded-circle" src={Fox}></img>
                </a>
                <div
                  className="dropdown-menu dropdown-menu-right shadow animated--grow-in"
                  aria-labelledby="userDropdown"
                >
                  <a className="dropdown-item" href="#">
                    <i className="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
                    Profile
                  </a>
                  <a className="dropdown-item" href="#">
                    <i className="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400"></i>
                    Settings
                  </a>
                  <a className="dropdown-item" href="#">
                    <i className="fas fa-list fa-sm fa-fw mr-2 text-gray-400"></i>
                    Activity Log
                  </a>
                  <div className="dropdown-divider"></div>
                  <a
                    className="dropdown-item"
                    href="#"
                    data-toggle="modal"
                    data-target="#logoutModal"
                  >
                    <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
                    Logout
                  </a>
                </div>
              </li>
            </ul>
          </nav>
          <div className="container-fluid">teste</div>
        </div>
      </div>
    </div>
  );
};

export default Teste;
