import React, { useState } from "react";
import LoginImg from "../../images/foxlogin.png";
import IconImg from "../../images/foxiconLogin.png";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { login } from "../../redux/actions/auth";
import PropTypes from "prop-types";
import Alert from "../layout/Alert";

const Login = ({ login, auth }) => {
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const { email, password } = loginData;

  const onChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    login(email, password);
  };

  if (auth.user) {
    return <Redirect to="/admin/portifolios" />;
  }

  return (
    <div className="container">
      <Alert />
      <div className="row justify-content-center">
        <div className="col-xl-10 col-lg-12 col-md-9">
          <div className="card o-hidden border-0 shadow-lg my-5">
            <div className="card-body p-0">
              <div className="row">
                <div className="col-lg-6 d-none d-lg-block">
                  <img
                    style={{
                      height: "100%",
                      width: "100%",
                      objectFit: "cover",
                    }}
                    src={LoginImg}
                    alt="Your brand"
                  ></img>
                </div>
                <div className="col-lg-6">
                  <div className="p-5">
                    <div className="text-center">
                      <h1 className="h4 text-gray-900">Welcome Back</h1>
                      <img
                        style={{
                          marginTop: "-10px",
                          marginBottom: "10px",
                          height: "70%",
                          width: "70%",
                          objectFit: "cover",
                        }}
                        src={IconImg}
                        alt="Your icon brand"
                      ></img>
                    </div>
                    <form onSubmit={(e) => onSubmit(e)} className="user">
                      <div className="form-group">
                        <input
                          type="email"
                          name="email"
                          className="form-control form-control-user"
                          placeholder="Enter Email Address..."
                          value={email}
                          onChange={(e) => {
                            onChange(e);
                          }}
                        />
                      </div>
                      <div className="form-group">
                        <input
                          type="password"
                          name="password"
                          className="form-control form-control-user"
                          placeholder="Password"
                          value={password}
                          onChange={(e) => {
                            onChange(e);
                          }}
                        />
                      </div>

                      <button className="btn btn-fox btn-user btn-block">
                        Login
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Login.propTypes = {
  login: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { login })(Login);
