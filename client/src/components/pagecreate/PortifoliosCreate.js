import React, { useState, Fragment } from "react";
import CKEditor from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { createPortifolios } from "../../redux/actions/portifolio";
import PropTypes from "prop-types";
import portifolio from "../../redux/reducers/portifolio";
import PortifolioModalCategoria from "./PortifolioModalCategoria";
import Alert from "../layout/Alert";

const PortifoliosCreate = ({
  createPortifolios,
  categoria: { categorias },
}) => {
  const [img, setImg] = useState("");
  const [showImg, setShowImg] = useState("");
  const [titulo, setTitulo] = useState("");
  const [descricao, setDesc] = useState("");
  const [categoria, setCategoria] = useState("");

  const onChange = (e, data) => {
    if (data) {
      setDesc(data);
    }
    if (e.target) {
      if (e.target.name === "titulo") {
        setTitulo(e.target.value);
      }
      if (e.target.name === "categoria") {
        setCategoria(e.target.value);
      }
      if (e.target.files) {
        setShowImg(URL.createObjectURL(e.target.files[0]));
        setImg(e.target.files[0]);
      }
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    createPortifolios(titulo, descricao, img, categoria);
    if (titulo !== "" && descricao !== "" && categoria !== "") {
      setImg("");
      setTitulo("");
      setDesc("");
      setCategoria("");
      setShowImg(null);
    }
  };

  return (
    <div>
      <div className="container">
        <div className="card">
          <div className="card-body mb-4">
            <div className="card-title text-center">
              <h3 className="text-dark">Criar um novo item</h3>
            </div>
            <div className="card-text m-4">
              <form
                onSubmit={(e) => {
                  onSubmit(e);
                }}
              >
                <div style={{ marginTop: "20px" }} className="form-group">
                  <div className="row">
                    <div className="col-md-12">
                      <label htmlFor="titulo">
                        <h4>
                          Titulo<span style={{ color: "red" }}>* </span>
                        </h4>
                      </label>
                    </div>
                    <div className="col-md-12">
                      <input
                        type="title"
                        className="form-control"
                        id="titulo"
                        name="titulo"
                        onChange={(e) => onChange(e)}
                        value={titulo}
                        placeholder="Seu titulo..."
                      />
                    </div>
                  </div>
                </div>
                <div style={{ marginTop: "20px" }} className="form-group">
                  <div className="row">
                    <div className="col-md-12">
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <label htmlFor="titulo">
                          <h4>
                            Categoria<span style={{ color: "red" }}>* </span>
                          </h4>
                        </label>

                        <button
                          type="button"
                          className="btn btn-fox"
                          style={{
                            height: "35px",
                            lineHeight: "10px",
                            paddingBottom: "10px",
                          }}
                          data-toggle="modal"
                          data-target="#exampleModal"
                        >
                          Nova categoria
                        </button>
                      </div>
                    </div>
                    <div className="col-md-12">
                      {portifolio ? (
                        <select
                          type="button"
                          className="btn border border-dark"
                          onChange={(e) => onChange(e)}
                          name="categoria"
                          value={categoria}
                          id="categoria"
                        >
                          <option value="-">-</option>
                          {categorias ? (
                            <Fragment>
                              {categorias.map((each) => (
                                <option key={each._id} value={each.categoria}>
                                  {each.categoria}
                                </option>
                              ))}
                            </Fragment>
                          ) : (
                            ""
                          )}
                        </select>
                      ) : (
                        ""
                      )}
                    </div>
                  </div>
                </div>
                <div style={{ marginTop: "20px" }} className="form-group">
                  <div className="row">
                    <div className="col-md-6">
                      <label htmlFor="titulo">
                        <h4>
                          Descrição<span style={{ color: "red" }}>* </span>
                        </h4>
                      </label>
                    </div>
                    <div className="col-md-12">
                      <CKEditor
                        config={{
                          toolbar: [
                            "heading",
                            "|",
                            "link",
                            "bulletedList",
                            "numberedList",
                            "undo",
                            "redo",
                            "bold",
                            "italic",
                            "blockQuote",
                            "imageTextAlternative",
                            "imageStyle:full",
                            "imageStyle:side",
                            "mediaEmbed",
                            "insertTable",
                            "tableColumn",
                            "tableRow",
                            "mergeTableCells",
                          ],
                        }}
                        editor={ClassicEditor}
                        data={descricao}
                        onInit={(editor) => {
                          // You can store the "editor" and use when it is needed.
                        }}
                        onChange={(event, editor) => {
                          const data = editor.getData();
                          onChange(event, data);
                        }}
                      />

                      <small>
                        <span style={{ color: "red" }}>* </span>campos
                        obrigatorios
                      </small>
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <label className="btn btn-fox" htmlFor="img">
                    Escolher Imagem
                    <input
                      style={{ display: "none" }}
                      type="file"
                      id="img"
                      name="img"
                      onChange={(e) => onChange(e)}
                    />
                  </label>
                </div>
                <div className="text-center">
                  <img
                    className="img-fluid mx-auto d-block"
                    height="100"
                    width="100"
                    alt=""
                    src={showImg}
                  />
                </div>
                <hr></hr>
                <Alert />
                <div className="text-center">
                  <button
                    type="submit"
                    style={{ marginRight: "30px" }}
                    className="btn btn-fox"
                  >
                    Criar
                  </button>
                  <Link to="/admin/portifolios/">
                    <button
                      style={{ marginLeft: "50px" }}
                      className="btn btn-secondary"
                    >
                      Cancelar
                    </button>
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <PortifolioModalCategoria />
    </div>
  );
};

PortifoliosCreate.propTypes = {
  categoria: PropTypes.object.isRequired,
  createPortifolios: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  categoria: state.categoria,
});

export default connect(mapStateToProps, { createPortifolios })(
  PortifoliosCreate
);
