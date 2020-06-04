import React, { useState } from "react";
import CKEditor from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { createPortifolios } from "../../redux/actions/portifolio";
import PropTypes from "prop-types";

const PortifoliosCreate = ({ createPortifolios, history }) => {
  const [img, setImg] = useState("");
  const [showImg, setShowImg] = useState("");
  const [titulo, setTitulo] = useState("");
  const [descricao, setDesc] = useState("");

  const onChange = (e, data) => {
    if (data) {
      setDesc(data);
    }
    if (e.target) {
      if (e.target.name === "titulo") {
        setTitulo(e.target.value);
      }
      if (e.target.files) {
        setShowImg(URL.createObjectURL(e.target.files[0]));
        setImg(e.target.files[0]);
      }
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    createPortifolios(titulo, descricao, img);
    setImg("");
    setTitulo("");
    setDesc("");
    setShowImg(null);
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
                    <div className="col-md-2">
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
                    <div className="col-md-2">
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
                    src={showImg}
                  />
                </div>
                <hr></hr>
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
    </div>
  );
};

PortifoliosCreate.propTypes = {
  createPortifolios: PropTypes.func.isRequired,
};

export default connect(null, { createPortifolios })(PortifoliosCreate);
