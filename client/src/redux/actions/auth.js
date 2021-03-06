import api from "../../utils/api";

import {
  LOGIN_ERROR,
  LOGIN,
  GET_USER,
  GET_ALL_USERS,
  EDIT_USER,
} from "./types";
import { setAlert } from "./alert";
import { getCategorias } from "./categoria";

export const login = (email, password) => async (dispatch) => {
  try {
    const body = JSON.stringify({ email, password });

    const res = await api.post("/login", body);

    dispatch({
      type: LOGIN,
      payload: res.data,
    });
    dispatch(getUser());
  } catch (err) {
    const error = err.response.data.errors[0].msg;
    dispatch(setAlert(error, "danger"));
    dispatch({
      type: LOGIN_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

export const getUser = () => async (dispatch) => {
  try {
    const res = await api.get("/login");
    dispatch(getCategorias());
    dispatch({
      type: GET_USER,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: LOGIN_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

export const getAllUsers = () => async (dispatch) => {
  try {
    const res = await api.get("/users");

    dispatch({
      type: GET_ALL_USERS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: LOGIN_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

export const makeUserAdmin = (id) => async (dispatch) => {
  try {
    const res = await api.put(`/edit/${id}`);

    dispatch({
      type: EDIT_USER,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: LOGIN_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};
