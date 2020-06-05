import React, { Fragment } from "react";
import Fox from "../../images/fox-gradient.png";
import { connect } from "react-redux";
import store from "../../store/store";
import { LOGOUT } from "../../redux/actions/types";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Navbar = ({ auth }) => {
  const onClick = () => {
    store.dispatch({
      type: LOGOUT,
    });
  };

  return (
    <Fragment>
      {auth.token ? (
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
                href="#!"
                id="userDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <span className="mr-2 d-none d-lg-inline text-gray-600 small">
                  Admin
                </span>
                <img
                  className="img-profile rounded-circle"
                  src={Fox}
                  alt="brand"
                ></img>
              </a>
              <div
                className="dropdown-menu dropdown-menu-right shadow animated--grow-in"
                aria-labelledby="userDropdown"
              >
                <a className="dropdown-item" href="#!">
                  <i className="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
                  Profile
                </a>
                <a className="dropdown-item" href="#!">
                  <i className="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400"></i>
                  Settings
                </a>
                <a className="dropdown-item" href="#!">
                  <i className="fas fa-list fa-sm fa-fw mr-2 text-gray-400"></i>
                  Activity Log
                </a>
                <div className="dropdown-divider"></div>
                <button onClick={() => onClick()} className="dropdown-item">
                  Logout
                </button>
              </div>
            </li>
          </ul>
        </nav>
      ) : (
        ""
      )}
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(Navbar);
