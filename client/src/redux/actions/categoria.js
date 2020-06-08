import api from "../../utils/api";
import { setAlert } from "./alert";
import { GET_CATEGORIAS, CREATE_CATEGORIA, CATEGORIA_ERROR } from "./types";

export const getCategorias = (email, password) => async (dispatch) => {
  try {
    const res = await api.get("/categoria");

    dispatch({
      type: GET_CATEGORIAS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: CATEGORIA_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

export const createCategoria = (categoria) => async (dispatch) => {
  try {
    const res = await api.post("/categoria/create", categoria);

    dispatch({
      type: CREATE_CATEGORIA,
      payload: res.data,
    });
    dispatch(setAlert("Categoria criada com sucesso!", "success"));
  } catch (err) {
    const errors = err.response.data.errors;
    errors.map((each) => {
      return dispatch(setAlert(each.msg, "danger"));
    });
    dispatch({
      type: CATEGORIA_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};
