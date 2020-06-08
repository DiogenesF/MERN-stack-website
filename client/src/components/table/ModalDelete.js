import React, { useRef } from "react";
import PropTypes from "prop-types";
import { deletePortifolio } from "../../redux/actions/portifolio";
import { connect } from "react-redux";

const ModalDelete = ({ id, deletePortifolio }) => {
  const modal = useRef(null);

  const onSubmit = (e) => {
    e.preventDefault();
    deletePortifolio(id);
    modal.current.click();
  };

  return (
    <div
      className="modal fade"
      id="exampleModalApagar"
      style={{ padding: "0px" }}
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5
              className="modal-title col-12 text-center"
              id="exampleModalLabel"
            >
              Apagar item do portifolio
            </h5>
          </div>
          <div className="modal-body">
            <form onSubmit={(e) => onSubmit(e)}>
              <h4>Tem certeza que deseja apagar este item permanentemente ?</h4>

              <hr></hr>
              <div className="col-12 text-center">
                <button
                  type="button"
                  className="btn btn-secondary mr-4 text-center"
                  ref={modal}
                  data-dismiss="modal"
                >
                  Voltar
                </button>
                <button type="submit" className="btn btn-fox ml-4 text-center">
                  Apagar
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

ModalDelete.propTypes = {
  deletePortifolio: PropTypes.func.isRequired,
};

export default connect(null, { deletePortifolio })(ModalDelete);
