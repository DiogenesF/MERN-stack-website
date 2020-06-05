import api from "../../utils/api";

import {
  GET_PORTIFOLIOS,
  PORTIFOLIO_ERROR,
  CREATE_PORTIFOLIO,
  DELETE_PORTIFOLIO,
  GET_PORTIFOLIO,
  LOADING_PORTIFOLIO,
} from "./types";

export const getPortifolios = () => async (dispatch) => {
  try {
    const res = await api.get("/servicos");

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

    const res = await api.get(`/servicos/${id}`);

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

export const createPortifolios = (titulo, descricao, img) => async (
  dispatch
) => {
  try {
    const fd = new FormData();
    fd.append("img", img);
    fd.append("titulo", titulo);
    fd.append("descricao", descricao);

    const res = await api.post("/servicos/upload", fd);

    dispatch({
      type: CREATE_PORTIFOLIO,
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

export const deletePortifolio = (id) => async (dispatch) => {
  try {
    await api.delete(`/servicos/${id}`);

    dispatch({
      type: DELETE_PORTIFOLIO,
      payload: id,
    });
  } catch (err) {
    console.log(err.response.data);
    dispatch({
      type: PORTIFOLIO_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};
