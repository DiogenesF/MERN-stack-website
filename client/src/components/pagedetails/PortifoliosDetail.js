import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import { getPortifolio } from "../../redux/actions/portifolio";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const PortifoliosDetail = ({
  match,
  portifolio: { portifolio, loading },
  getPortifolio,
}) => {
  useEffect(() => {
    console.log("a");
    getPortifolio(match.params.portId);
  }, [match.params.portId, getPortifolio]);

  return (
    <Fragment>
      <div className="container">
        <div className="card">
          <div className="card-body mb-4">
            <div className="card-text m-4">
              <div style={{ marginTop: "20px" }} className="form-group">
                <div className="row">
                  <div className="col-md-6">
                    <h4>Titulo:</h4>
                  </div>
                  <div className="col-md-12">
                    {portifolio ? (
                      <div>
                        <input
                          type="title"
                          className="form-control"
                          id="titulo"
                          name="titulo"
                          value={portifolio.titulo}
                          readOnly
                        />
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
              </div>
              <div style={{ marginTop: "20px" }} className="form-group">
                <div className="row">
                  <div className="col-md-6">
                    <h4>Descrição:</h4>
                  </div>
                  <div className="col-md-12">
                    {portifolio ? (
                      <div>
                        <div
                          type="title"
                          className="form-control"
                          id="titulo"
                          name="titulo"
                          readOnly
                        >
                          <div
                            dangerouslySetInnerHTML={{
                              __html: portifolio.descricao,
                            }}
                          />
                        </div>
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
              </div>
              <div className="form-group">
                <h4>Imagem</h4>

                <div className="col-md-12">
                  <div className="text-center">
                    {portifolio ? (
                      <div>
                        {portifolio.img ? (
                          <div>
                            <img
                              className="img-fluid mx-auto d-block center"
                              alt=""
                              height="500px"
                              width="500px"
                              src={portifolio.img}
                            />
                          </div>
                        ) : (
                          <p>Voce nao selecionou uma imagem..</p>
                        )}
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
              </div>
              <hr></hr>
              <div className="text-center">
                <Link to="/admin/portifolios/">
                  <button className="btn btn-secondary">Voltar</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

PortifoliosDetail.propTypes = {
  getPortifolio: PropTypes.func.isRequired,
  portifolio: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  portifolio: state.portifolio,
});

export default connect(mapStateToProps, { getPortifolio })(PortifoliosDetail);
