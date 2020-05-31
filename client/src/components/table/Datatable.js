import React from "react";
//import "./Datatable.css"; APARENTEMENTE NAO PRECISA

const Datatable = (props) => {
  return (
    <div>
      <h1 class="h3 mb-2 text-gray-800 cent">Banners</h1>
      <p class="mb-4 cent">Banners exibidos na home do site.</p>

      <div class="card shadow mb-4">
        <div
          style={{ display: "flex", justifyContent: "space-between" }}
          class="card-header py-3"
        >
          <h6 class="mt-3 font-weight-bold text-primary">Tabela de Banners</h6>
          <button
            class="btn btn-primary my-2"
            data-toggle="modal"
            data-target="#modalCriar"
          >
            Cadastrar novo banner
          </button>
        </div>
        <div class="card-body">
          <div class="table-responsive">
            <table
              class="table table-bordered"
              id="table"
              width="100%"
              cellspacing="0"
            >
              <thead>
                <tr>
                  <th>Título</th>
                  <th>Ações</th>
                </tr>
              </thead>
              <tfoot>
                <tr>
                  <th>Título</th>
                  <th>Ações</th>
                </tr>
              </tfoot>
              <tbody>
                <tr>
                  <td>Content</td>
                  <td>
                    <button
                      type="button"
                      class="btn btn-success"
                      data-toggle="modal"
                      data-target="#modalDetalhes"
                    >
                      <span class="far fa-file-alt">Detalhes</span>
                    </button>
                    <button
                      type="button"
                      class="btn btn-warning"
                      data-toggle="modal"
                      data-target="#modalEditar"
                    >
                      <span class="far fa-edit">Editar</span>
                    </button>
                    <button
                      type="button"
                      class="btn btn-danger"
                      data-toggle="modal"
                      data-target="#modalApagar"
                    >
                      <span class="far fa-trash-alt">Apagar</span>
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Datatable;
