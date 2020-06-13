import React, { useEffect, Fragment, useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getAllUsers } from "../../redux/actions/auth";
import { setAlert } from "../../redux/actions/alert";
import ModalConfirmar from "./ModalConfirmar";
import Alert from "../layout/Alert";

const Usuarios = ({
  getAllUsers,
  setAlert,
  auth: { users, user, loading },
}) => {
  const [idTornarAdmin, setIdTornarAdmin] = useState("");

  useEffect(() => {
    getAllUsers();
  }, [getAllUsers]);

  const onClick = (e) => {
    if (!user.isAdmin) {
      setAlert("Voce não tem permissão!", "danger");
    }
    if (e.target.value === "isAdmin") {
      setAlert("Usuário já é admin!", "danger");
    } else {
      setIdTornarAdmin(e.target.value);
    }
  };

  return (
    <div className="container">
      {loading ? (
        ""
      ) : (
        <div className="card">
          <div className="card-body mb-4">
            <Alert />
            <div className="card-text m-4">
              <div style={{ marginTop: "20px" }} className="form-group">
                <div className="row">
                  <div className="col-md-6">
                    <h4>Usuarios: </h4>
                  </div>
                  <div className="col-md-12">
                    {users ? (
                      <Fragment>
                        {users.map((each) => (
                          <Fragment key={each._id}>
                            <div className="col-md-12">
                              <p>{each.name}</p>

                              <div
                                style={{
                                  display: "flex",
                                  justifyContent: "flex-start",
                                }}
                              >
                                <input
                                  className="form-control col-4"
                                  value={each.email}
                                  disabled
                                />
                                {user.isAdmin ? (
                                  <Fragment>
                                    {each.isAdmin ? (
                                      <button
                                        onClick={(e) => onClick(e)}
                                        type="submit"
                                        value="isAdmin"
                                        className="btn btn-secondary"
                                      >
                                        Ja é admin
                                      </button>
                                    ) : (
                                      <button
                                        onClick={(e) => onClick(e)}
                                        type="submit"
                                        value={each._id}
                                        className="btn btn-fox"
                                        data-toggle="modal"
                                        data-target="#exampleModalConfirmar"
                                      >
                                        Tornar admin
                                      </button>
                                    )}
                                  </Fragment>
                                ) : (
                                  <button
                                    onClick={(e) => onClick(e)}
                                    type="submit"
                                    className="btn btn-secondary"
                                  >
                                    {" "}
                                    Sem permissao
                                  </button>
                                )}
                              </div>
                            </div>
                            <hr></hr>
                          </Fragment>
                        ))}
                      </Fragment>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <ModalConfirmar id={idTornarAdmin} adm={true} />
    </div>
  );
};

Usuarios.propTypes = {
  getAllUsers: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  setAlert: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { getAllUsers, setAlert })(Usuarios);
