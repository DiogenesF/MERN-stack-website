import axios from "axios";

import { setAlert } from "./alert";
import {
  SET_LOADING_TRUE,
  SET_LOADING_FALSE_ERROR,
  SET_LOADING_FALSE_SENT,
} from "./types";

export const contactForm = (formData) => async (dispatch) => {
  try {
    const headers = {
      "Content-Type": "application/json",
    };

    dispatch({
      type: SET_LOADING_TRUE,
    });
    await axios.post("/contato", formData, headers);
    dispatch({
      type: SET_LOADING_FALSE_SENT,
    });
    dispatch(setAlert("Email enviado. Muito obrigado!", "success"));
  } catch (err) {
    dispatch({
      type: SET_LOADING_FALSE_ERROR,
    });
    dispatch(setAlert("Ops.. Ocorreu algum erro. Tente novamente", "danger"));
  }
};
