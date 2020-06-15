import React from "react";
import PropTypes from "prop-types";
import Fox from "../../images/fox-gradient.png";
import Fox2 from "../../images/foxlogin.png";
import Fox3 from "../../images/fox.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Members = (props) => {
  return (
    <section id="team" className="team">
      <div className="container">
        <div className="section-title">
          <h3 style={{ color: "rgb(115, 0, 43)" }} className="legis-size-title">
            MEMBROS
          </h3>
        </div>

        <div className="row mt-4">
          <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
            <div className="member">
              <div className="member-img">
                <img
                  style={{
                    height: "300px",
                    width: "100%",
                    objectFit: "fill",
                  }}
                  src={Fox}
                  className="img-fluid"
                  alt=""
                />
                <div className="social">
                  <a href="#!">
                    <i>
                      <FontAwesomeIcon icon={["fab", "facebook"]} />
                    </i>
                  </a>
                  <a href="#!">
                    <i>
                      <FontAwesomeIcon icon={["fab", "github"]} />
                    </i>
                  </a>
                  <a href="#!">
                    <i>
                      <FontAwesomeIcon icon={["fab", "linkedin"]} />
                    </i>
                  </a>
                  <a href="#!">
                    <i>
                      <FontAwesomeIcon icon={["fab", "twitter"]} />
                    </i>
                  </a>
                </div>
              </div>
              <div className="member-info">
                <h4>Sarah Jhonson</h4>
                <span>Product Manager</span>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
            <div className="member">
              <div className="member-img">
                <img
                  style={{
                    height: "300px",
                    width: "100%",
                    objectFit: "fill",
                  }}
                  src={Fox2}
                  className="img-fluid"
                  alt=""
                />
                <div className="social">
                  <a href="#!">
                    <i>
                      <FontAwesomeIcon icon="bars" color="red" />
                    </i>
                  </a>
                  <a href="#!">
                    <i className="icofont-facebook"></i>
                  </a>
                  <a href="#!">
                    <i className="icofont-instagram"></i>
                  </a>
                  <a href="#!">
                    <i className="icofont-linkedin"></i>
                  </a>
                </div>
              </div>
              <div className="member-info">
                <h4>Sarah Jhonson</h4>
                <span>Product Manager</span>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
            <div className="member">
              <div className="member-img">
                <img
                  style={{
                    height: "300px",
                    width: "100%",
                    objectFit: "fill",
                  }}
                  src={Fox3}
                  className="img-fluid"
                  alt=""
                />
                <div className="social">
                  <a href="#!">
                    <i>
                      <FontAwesomeIcon icon="bars" color="red" />
                    </i>
                  </a>
                  <a href="#!">
                    <i className="icofont-facebook"></i>
                  </a>
                  <a href="#!">
                    <i className="icofont-instagram"></i>
                  </a>
                  <a href="#!">
                    <i className="icofont-linkedin"></i>
                  </a>
                </div>
              </div>
              <div className="member-info">
                <h4>Sarah Jhonson</h4>
                <span>Product Manager</span>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
            <div className="member">
              <div className="member-img">
                <img
                  style={{
                    height: "300px",
                    width: "400px%",
                    objectFit: "fill",
                  }}
                  src={Fox3}
                  className="img-fluid"
                  alt=""
                />
                <div className="social">
                  <a href="#!">
                    <i>
                      <FontAwesomeIcon icon="bars" color="red" />
                    </i>
                  </a>
                  <a href="#!">
                    <i className="icofont-facebook"></i>
                  </a>
                  <a href="#!">
                    <i className="icofont-instagram"></i>
                  </a>
                  <a href="#!">
                    <i className="icofont-linkedin"></i>
                  </a>
                </div>
              </div>
              <div className="member-info">
                <h4>Sarah Jhonson</h4>
                <span>Product Manager</span>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
            <div className="member">
              <div className="member-img">
                <img
                  style={{
                    height: "300px",
                    width: "100%",
                    objectFit: "fill",
                  }}
                  src={Fox3}
                  className="img-fluid"
                  alt=""
                />
                <div className="social">
                  <a href="#!">
                    <i>
                      <FontAwesomeIcon icon="bars" color="red" />
                    </i>
                  </a>
                  <a href="#!">
                    <i className="icofont-facebook"></i>
                  </a>
                  <a href="#!">
                    <i className="icofont-instagram"></i>
                  </a>
                  <a href="#!">
                    <i className="icofont-linkedin"></i>
                  </a>
                </div>
              </div>
              <div className="member-info">
                <h4>Sarah Jhonson</h4>
                <span>Product Manager</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

Members.propTypes = {};

export default Members;
