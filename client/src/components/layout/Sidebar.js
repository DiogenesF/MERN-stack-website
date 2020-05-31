import React, { Fragment } from "react";
import "./Sidebar.css";
import Logo from "../../images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Sidebar = (props) => {
  return (
    <div className="page-wrapper chiller-theme toggled">
      <a id="show-sidebar" className="btn btn-sm btn-dark"></a>
      <nav id="sidebar" className="sidebar-wrapper">
        <div className="sidebar-content">
          <div className="sidebar-brand">
            <a>Welcome</a>
            <div id="close-sidebar">
              <FontAwesomeIcon icon="bars" color="white" />
            </div>
          </div>
          <div className="sidebar-header">
            <div className="user-pic">
              <img
                style={{ borderRadius: "50%" }}
                className="img-responsive img-rounded"
                src={Logo}
                alt="Your logo"
              ></img>
            </div>
          </div>

          <div style={{ marginTop: "10px" }} className="sidebar-menu">
            <ul>
              <li className="sidebar-dropdown">
                <a>
                  <FontAwesomeIcon icon="flag" color="white" size="lg" />{" "}
                  <span>Dashboard</span>
                </a>
              </li>
              <li className="sidebar-dropdown">
                <a>
                  <FontAwesomeIcon icon="flag" color="white" size="lg" />{" "}
                  <span>E-commerce</span>
                </a>
              </li>
              <li className="sidebar-dropdown">
                <a>
                  <FontAwesomeIcon icon="flag" color="white" size="lg" />{" "}
                  <span>Components</span>
                </a>
              </li>
              <li className="sidebar-dropdown">
                <a>
                  <FontAwesomeIcon icon="flag" color="white" size="lg" />{" "}
                  <span>Charts</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <main className="page-content">
        <div className="container-fluid">
          <h2>Pro Sidebar</h2>
          <FontAwesomeIcon icon="bars" color="green" size="lg" />
          <div className="row">
            <div className="form-group col-md-12">
              <p>
                This is a responsive sidebar template with dropdown menu based
                on bootstrap 4 framework.
              </p>
              <p>
                {" "}
                You can find the complete code on{" "}
                <a href="https://github.com/azouaoui-med/pro-sidebar-template">
                  Github
                </a>
                , it contains more themes and background image option
              </p>
            </div>
            <div className="form-group col-md-12">
              <iframe
                src="https://ghbtns.com/github-btn.html?user=azouaoui-med&repo=pro-sidebar-template&type=star&count=true&size=small"
                frameborder="0"
                scrolling="0"
                width="90px"
                height="30px"
              ></iframe>
              <iframe
                src="https://ghbtns.com/github-btn.html?user=azouaoui-med&repo=pro-sidebar-template&type=fork&count=true&size=small"
                frameborder="0"
                scrolling="0"
                width="90px"
                height="30px"
              ></iframe>
            </div>
            <div className="form-group col-md-12">
              <div className="alert alert-success" role="alert">
                <h4 className="alert-heading">New !</h4>
                <p>
                  New react pro sidebar library is now available on{" "}
                  <a href="https://www.npmjs.com/package/react-pro-sidebar">
                    npm
                  </a>{" "}
                  <a href="https://github.com/azouaoui-med/react-pro-sidebar">
                    <img
                      alt="GitHub stars"
                      src="https://img.shields.io/github/stars/azouaoui-med/react-pro-sidebar?style=social"
                    ></img>
                  </a>
                </p>
                <a
                  href="https://github.com/azouaoui-med/react-pro-sidebar"
                  className="btn btn-sm btn-primary mr-2"
                >
                  Github
                </a>
                <a
                  href="https://azouaoui-med.github.io/react-pro-sidebar"
                  className="btn btn-sm btn-success"
                >
                  Demo
                </a>
              </div>
            </div>
          </div>
          <h5>More templates</h5>
          <div className="row">
            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4">
              <div className="card rounded-0 p-0 shadow-sm">
                <img
                  src="https://user-images.githubusercontent.com/25878302/58369568-a49b2480-7efc-11e9-9ca9-2be44afacda1.png"
                  className="card-img-top rounded-0"
                  alt="Angular pro sidebar"
                ></img>
                <div className="card-body text-center">
                  <h6 className="card-title">Angular Pro Sidebar</h6>
                  <a
                    href="https://github.com/azouaoui-med/angular-pro-sidebar"
                    className="btn btn-primary btn-sm"
                  >
                    Github
                  </a>
                  <a
                    href="https://azouaoui-med.github.io/angular-pro-sidebar/demo/"
                    className="btn btn-success btn-sm"
                  >
                    Preview
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4">
              <div className="card rounded-0 p-0 shadow-sm">
                <img
                  src="https://user-images.githubusercontent.com/25878302/58369258-33f20900-7ef8-11e9-8ff3-b277cb7ed7b4.PNG"
                  className="card-img-top rounded-0"
                  alt="Angular pro sidebar"
                ></img>
                <div className="card-body text-center">
                  <h6 className="card-title">Angular Dashboard</h6>
                  <a
                    href="https://github.com/azouaoui-med/lightning-admin-angular"
                    className="btn btn-primary btn-sm"
                  >
                    Github
                  </a>
                  <a
                    href="https://azouaoui-med.github.io/lightning-admin-angular/demo/"
                    className="btn btn-success btn-sm"
                  >
                    Preview
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Sidebar;
