import React, { useState, useRef } from "react";
import PropTypes from "prop-types";
import { createCategoria } from "../../redux/actions/categoria";
import { connect } from "react-redux";

const PortifolioModal = ({ createCategoria }) => {
  const closeModal = useRef(null);
  const [categoria, setCategoria] = useState("");

  const onChange = (e) => {
    setCategoria(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    createCategoria({ categoria });
    closeModal.current.click();
    setCategoria("");
  };

  return (
    <div className="modal fade" id="exampleModal" style={{ padding: "0px" }}>
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5
              className="modal-title col-12 text-center"
              id="exampleModalLabel"
            >
              Criar nova categoria
            </h5>
          </div>
          <div className="modal-body">
            <form onSubmit={(e) => onSubmit(e)}>
              <label htmlFor="categoria">
                <h4>
                  Categoria
                  <span style={{ color: "red" }}>* </span>
                </h4>
              </label>
              <input
                onChange={(e) => onChange(e)}
                name="categoria"
                id="categoria"
                value={categoria}
                className="form-control form-control-user"
              />
              <hr></hr>
              <div className="col-12 text-center">
                <button
                  type="button"
                  className="btn btn-secondary mr-4 text-center"
                  ref={closeModal}
                  data-dismiss="modal"
                >
                  Close
                </button>
                <button type="submit" className="btn btn-fox ml-4 text-center">
                  Criar
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

PortifolioModal.propTypes = {
  createCategoria: PropTypes.func.isRequired,
};

export default connect(null, { createCategoria })(PortifolioModal);
