import React, { useEffect, Fragment, useState } from "react";
import { connect } from "react-redux";
import { getPortifolios } from "../../redux/actions/portifolio";
import PropTypes from "prop-types";
import "../style/Datatable.css";
import { Redirect } from "react-router-dom";
import { Link } from "react-router-dom";
import ModalDelete from "./ModalDelete";
import Alert from "../layout/Alert";

import Dotdotdot from "react-dotdotdot";

const Portifolio = ({
  getPortifolios,

  portifolios: { portifolios, loading },
}) => {
  const [id, setId] = useState("");

  useEffect(() => {
    getPortifolios();
  }, [getPortifolios]);

  const onClick = (id) => {
    setId(id);
    console.log(id);
  };

  if (!localStorage.token) {
    return <Redirect to="/login" />;
  }

  return (
    <Fragment>
      {loading ? (
        ""
      ) : (
        <div>
          <h1 className="h3 mb-2 text-gray-800 cent">Portifolio</h1>
          <p className="mb-4 cent">Portifolios exibidos na home do site.</p>
          <Alert />
          <div className="card shadow mb-4">
            <div
              style={{ display: "flex", justifyContent: "space-between" }}
              className="card-header py-3"
            >
              <h6 className="mt-3 font-weight-bold text-fox">
                Tabela de Portifolio
              </h6>
              <Link to="/admin/portifolios/create">
                <button
                  className="btn btn-fox my-2"
                  data-toggle="modal"
                  data-target="#modalCriar"
                >
                  Cadastrar novo
                </button>
              </Link>
            </div>

            <div className="card-body">
              <div className="table-responsive">
                <div
                  id="table_wrapper"
                  className="dataTables_wrapper dt-bootstrap4"
                >
                  <div className="row">
                    <div className="col-sm-12 col-md-6">
                      <div className="dataTables_length" id="table_length">
                        <label>
                          <select
                            name="table_length"
                            aria-controls="table"
                            className="custom-select custom-select-sm form-control form-control-sm"
                          >
                            <option value="10">10</option>
                            <option value="25">25</option>
                            <option value="50">50</option>
                            <option value="100">100</option>
                          </select>{" "}
                          resultados por página
                        </label>
                      </div>
                    </div>
                    <div className="col-sm-12 col-md-6">
                      <div id="table_filter" className="dataTables_filter">
                        <label>
                          Pesquisar
                          <input
                            type="search"
                            className="form-control form-control-sm"
                            placeholder=""
                            aria-controls="table"
                          />
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-12">
                      <table
                        className="table table-bordered dataTable"
                        id="table"
                        width="100%"
                        role="grid"
                        aria-describedby="table_info"
                        style={{ width: "100%" }}
                      >
                        <thead>
                          <tr role="row">
                            <th
                              className="sorting_asc"
                              aria-controls="table"
                              aria-label="Título: Ordenar colunas de forma descendente"
                              style={{ width: "155px" }}
                              aria-sort="ascending"
                            >
                              Título
                            </th>
                            <th
                              className="sorting"
                              aria-controls="table"
                              aria-label="Ações: Ordenar colunas de forma ascendente"
                              style={{ width: "660px" }}
                            >
                              Ações
                            </th>
                          </tr>
                        </thead>
                        <tfoot>
                          <tr>
                            <th>Título</th>
                            <th>Ações</th>
                          </tr>
                        </tfoot>
                        <tbody>
                          {portifolios.length > 0 ? (
                            <Fragment>
                              {portifolios.map((each) => {
                                return (
                                  <Fragment key={each._id}>
                                    <tr role="row" className="odd">
                                      <td>
                                        <Dotdotdot clamp={1}>
                                          {each.titulo}
                                        </Dotdotdot>
                                      </td>
                                      <td>
                                        <Link
                                          to={`/admin/portifolios/${each._id}`}
                                          className="btn btn-success"
                                        >
                                          <span className="far fa-file-alt">
                                            Detalhes
                                          </span>
                                        </Link>
                                        <Link
                                          to={`/admin/portifolios/edit/${each._id}`}
                                          type="button"
                                          className="btn btn-warning"
                                        >
                                          <span className="far fa-edit">
                                            Editar
                                          </span>
                                        </Link>
                                        <button
                                          type="button"
                                          className="btn btn-danger"
                                          onClick={(e) => onClick(each._id)}
                                          data-toggle="modal"
                                          data-target="#exampleModalApagar"
                                        >
                                          <span className="far fa-trash-alt">
                                            Apagar
                                          </span>
                                        </button>
                                      </td>
                                    </tr>
                                  </Fragment>
                                );
                              })}
                            </Fragment>
                          ) : (
                            <tr>
                              <td className="text-center">
                                <h5>...</h5>
                              </td>
                              <td>
                                <h5> Nenhum registro a ser exibido </h5>
                              </td>
                            </tr>
                          )}
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-12 col-md-5">
                      <div
                        className="dataTables_info"
                        id="table_info"
                        role="status"
                        aria-live="polite"
                      >
                        Mostrando de 1 até 1 de 1 registros
                      </div>
                    </div>
                    <div className="col-sm-12 col-md-7">
                      <div
                        className="dataTables_paginate paging_simple_numbers"
                        id="table_paginate"
                      >
                        <ul className="pagination">
                          <li
                            className="paginate_button page-item previous disabled"
                            id="table_previous"
                          >
                            <a
                              href="#!"
                              aria-controls="table"
                              data-dt-idx="0"
                              className="page-link"
                            >
                              Anterior
                            </a>
                          </li>
                          <li className="paginate_button page-item active">
                            <a
                              href="#!"
                              aria-controls="table"
                              data-dt-idx="1"
                              className="page-link"
                            >
                              1
                            </a>
                          </li>
                          <li
                            className="paginate_button page-item next disabled"
                            id="table_next"
                          >
                            <a
                              href="#!"
                              aria-controls="table"
                              data-dt-idx="2"
                              className="page-link"
                            >
                              Próximo
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <ModalDelete id={id} />
        </div>
      )}
    </Fragment>
  );
};

Portifolio.propTypes = {
  getPortifolios: PropTypes.func.isRequired,
  portifolios: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  portifolios: state.portifolio,
});

export default connect(mapStateToProps, { getPortifolios })(Portifolio);
