import api from "../../utils/api";

import {
  GET_PORTIFOLIOS,
  PORTIFOLIO_ERROR,
  CREATE_PORTIFOLIO,
  DELETE_PORTIFOLIO,
  GET_PORTIFOLIO,
  LOADING_PORTIFOLIO,
  EDIT_PORTIFOLIO,
} from "./types";
import { setAlert } from "./alert";

export const getPortifolios = () => async (dispatch) => {
  try {
    const res = await api.get("/portifolios");

    dispatch({
      type: GET_PORTIFOLIOS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err.response.data);
    dispatch({
      type: PORTIFOLIO_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

export const getPortifolio = (id) => async (dispatch) => {
  try {
    dispatch({ type: LOADING_PORTIFOLIO });

    const res = await api.get(`/portifolios/${id}`);

    dispatch({
      type: GET_PORTIFOLIO,
      payload: res.data,
    });
  } catch (err) {
    console.log(err.response.data);
    dispatch({
      type: PORTIFOLIO_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

export const createPortifolios = (titulo, descricao, img, categoria) => async (
  dispatch
) => {
  try {
    const fd = new FormData();
    fd.append("img", img);
    fd.append("titulo", titulo);
    fd.append("descricao", descricao);
    fd.append("categoria", categoria);

    const res = await api.post("/portifolios/upload", fd);

    dispatch({
      type: CREATE_PORTIFOLIO,
      payload: res.data,
    });
    dispatch(setAlert("Item Criado com Sucesso", "success"));
  } catch (err) {
    const errors = err.response.data.errors;
    errors.map((each) => {
      return dispatch(setAlert(each.msg, "danger"));
    });
    dispatch({
      type: PORTIFOLIO_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

export const editPortifolio = (
  titulo,
  descricao,
  img,
  categoria,
  portId
) => async (dispatch) => {
  try {
    const fd = new FormData();
    fd.append("img", img);
    fd.append("titulo", titulo);
    fd.append("descricao", descricao);
    fd.append("categoria", categoria);

    const res = await api.put(`/portifolios/upload/${portId}`, fd);

    dispatch({
      type: EDIT_PORTIFOLIO,
      payload: res.data,
    });
    dispatch(setAlert("Item Editado com Sucesso!", "success"));
  } catch (err) {
    const errors = err.response.data.errors;
    errors.map((each) => {
      return dispatch(setAlert(each.msg, "danger"));
    });
    dispatch({
      type: PORTIFOLIO_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

export const deletePortifolio = (id) => async (dispatch) => {
  try {
    await api.delete(`/portifolios/${id}`);

    dispatch({
      type: DELETE_PORTIFOLIO,
      payload: id,
    });

    dispatch(setAlert("Item Excluido com Sucesso", "success"));
  } catch (err) {
    const errors = err.response.data.errors;
    errors.map((each) => {
      return dispatch(setAlert(each.msg, "danger"));
    });
    dispatch({
      type: PORTIFOLIO_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};
